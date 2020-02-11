import React, { Fragment } from 'react';
import {
    translate,
    Filter,
    List,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
    AutocompleteInput,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    NullableBooleanInput,
    NumberField,
    Responsive,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import GridList from './GridList';
import HostCreate from './HostCreate';
import HostEdit from './HostEdit';
import { Drawer } from '@material-ui/core';
import { Route } from 'react-router-dom';

const quickFilterStyles = {
    root: {
        marginBottom: '0.7em',
    },
};


export const HostFilter = props => (
    <Filter {...props}>
    
    </Filter>
);

const HostList = props => (

    <Fragment>
    <List
        {...props}
        filters={<HostFilter />}
        perPage={20}
        sort={{ field: 'id', order: 'ASC' }}
    >
    <Datagrid {...props} >


        <TextField source="name" />
        <TextField source="ip" />
        <TextField source="hostname" />
        <TextField source="macaddress" />
        <TextField source="operating_system" />
        <TextField source="status" />
        <DateField source="created" />
        <DateField source="updated" />

        <EditButton />
    </Datagrid>
    </List>

            </Fragment>
);

export default HostList;


// HostsList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(HostsList);