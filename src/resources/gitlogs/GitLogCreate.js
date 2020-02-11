//resources/Gitlogs/GitLogCreate.js
import React from 'react';
import { SimpleForm, EditButton, Create, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const GitLogCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default GitLogCreate;
