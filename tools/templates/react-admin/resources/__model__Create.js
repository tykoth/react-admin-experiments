//resources/__resource__/__model__Create.js
import React from 'react';
import { SimpleForm, EditButton, Create, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const __model__Create = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default __model__Create;
