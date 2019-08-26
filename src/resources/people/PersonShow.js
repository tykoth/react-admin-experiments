import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    Responsive,
    SearchInput,
    TabbedShowLayout,
    TabbedShowLayoutTabs,
    Tab
} from 'react-admin';
import Poster from './Poster';
const permissions = "admin";
export const PersonShow = props => (

    <Show {...props}>
        <TabbedShowLayout tabs={<TabbedShowLayoutTabs scrollable={true}/>}>
            <Tab label="Profile">
            <Poster source="avatar" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            </Tab>
            <Tab label="Contats"></Tab>
            <Tab label="Activities"></Tab>
            <Tab label="Relationships"></Tab>
            <Tab label="Content"></Tab>
            <Tab label="Configure"></Tab>
            <Tab label="Research"></Tab>
            </TabbedShowLayout>
    </Show>
    // <Show {...props}>
    //     <SimpleShowLayout>
    //         
    //         <TextField source="id" />
    //     </SimpleShowLayout>
    // </Show>
);