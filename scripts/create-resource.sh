# Create resource 'Todo'
plural=$1
singular=$2

echo "Will create resources/$plural/ "
mkdir -p src/resources/$plural

indexjs=`cat <<EOE
//resources/$plural/index.js
import { ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
import ${singular}Edit from './${singular}Edit';
import ${singular}Create from './${singular}Create';
import ${singular}List from './${singular}List';
import ${singular}Show from './${singular}Show';

export default {
    create:${singular}Create,
    list: ${singular}List,
    show: ${singular}Show,
    edit: ${singular}Edit
};

EOE
`


listjs=`cat <<EOE
//resources/$plural/${singular}List.js
import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';



const ${singular}List = ({ classes, ...props }) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ${singular}List;

EOE
`


editjs=`cat <<EOE
//resources/$plural/${singular}Edit.js
import React from 'react';
import { SimpleForm, EditButton, Edit, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const ${singular}Edit = ({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default ${singular}Edit;

EOE
`

createjs=`cat <<EOE
//resources/$plural/${singular}Create.js
import React from 'react';
import { SimpleForm, EditButton, Create, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const ${singular}Create = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default ${singular}Create;

EOE
`
echo "$indexjs" > src/resources/$plural/index.js

echo "$editjs" > src/resources/$plural/${singular}Edit.js;
echo "$createjs" > src/resources/$plural/${singular}Create.js;
echo "$listjs" > src/resources/$plural/${singular}List.js;
echo "//${singular}Show" > src/resources/$plural/${singular}Show.js;