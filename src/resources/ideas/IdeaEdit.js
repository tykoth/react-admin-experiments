//resources/ideas/IdeaEdit.js
import React from 'react';
import { SimpleForm, EditButton, Edit, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const IdeaEdit = ({ classes, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export default IdeaEdit;
