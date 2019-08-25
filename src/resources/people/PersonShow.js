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
} from 'react-admin';
import Poster from './Poster';

export const PersonShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <Poster source="avatar" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);