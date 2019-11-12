//resources/Gitlogs/GitLogList.js
import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';



const GitLogList = ({ classes, ...props }) => (
    <List {...props}>
        <Datagrid>
        <TextField source="repository" /> 
        <TextField source="commit_hash" /> 
        <TextField source="author" />
        <TextField source="date" />
        <TextField source="message" />
        <TextField source="changed_files" />
        <TextField source="lines_added" />
        <TextField source="lines_deleted" />          
        </Datagrid>
    </List>
);

export default GitLogList;
