//resources/ideas/IdeaCreate.js
import React from 'react';
import { SimpleForm, EditButton, Create, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const IdeaCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default IdeaCreate;
