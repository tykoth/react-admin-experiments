import React, { Component } from 'react';
import inflection from 'inflection';
import { withStyles } from '@material-ui/core/styles';
import {
    ListController,
    getElementsFromRecords,
    InferredElement,
} from 'ra-core';
import {
    List,
Datagrid,
ArrayField,
SingleFieldList,
ChipField,
BooleanField,
DateField,
EmailField,
TextField,
NumberField,
ReferenceField,
ReferenceArrayField,
UrlField,
ListView 
} from 'react-admin';

const styles = {}


const AdList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            
            <DateField source="created_at" />
            
            
            
            
            
            
            
            <TextField source="pricevalue" />
            
            
            
            
            <TextField source="categoryname" />
            
            
            
            
            
            
            
            
            
            <TextField source="user_name" />
            <TextField source="phone_phone" />
            
            <BooleanField source="phone_phoneverified" />
            
            
            
            
            
            
            
            
            <TextField source="location_neighbourhood" />
            
            <TextField source="location_municipality" />
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        </Datagrid>
    </List>
);
export default withStyles(styles)(AdList);