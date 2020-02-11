//resources/Projects/ProjectCreate.js
import React from 'react';
import { SimpleForm, EditButton, Create, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const ProjectCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="source" />
            <TextInput source="hash" />
            <TextInput source="another" />
            <TextInput source="test" />
        </SimpleForm>
    </Create>
);

export default ProjectCreate;
