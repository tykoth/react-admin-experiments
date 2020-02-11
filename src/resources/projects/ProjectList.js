//resources/Projects/ProjectList.js
import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';



const ProjectList = ({ classes, ...props }) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ProjectList;
