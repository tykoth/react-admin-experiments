//resources/__resource__/__model__Edit.js
import React from 'react';
import { SimpleForm, EditButton, Edit, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const __model__Edit = ({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default __model__Edit;
