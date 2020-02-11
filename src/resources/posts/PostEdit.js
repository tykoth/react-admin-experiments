import React from 'react';
import {
    ReferenceManyField,
    BooleanInput,
    // Create,
    DateInput,
    // FormDataConsumer,
    LongTextInput,
    NumberInput,
    // SaveButton,
    // SimpleForm,
    TextInput,
    // Toolbar,
    Edit,
    DisabledInput,
    Datagrid,
    TextField,
    DateField,
    EditButton
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import RichTextInput from 'ra-input-rich-text';

import { TabbedForm, FormTab } from 'react-admin'

export const PostEdit = (props) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <DisabledInput label="Id" source="id" />
                <TextInput source="title"  />
                <LongTextInput source="teaser" />
            </FormTab>
            <FormTab label="body">
                <RichTextInput source="body"  addLabel={false} />
            </FormTab>
            <FormTab label="Miscellaneous">
                <TextInput label="Password (if protected post)" source="password" type="password" />
                <DateInput label="Publication date" source="published_at" />
                <NumberInput source="average_note" />
                <BooleanInput label="Allow comments?" source="commentable" defaultValue />
                <DisabledInput label="Nb views" source="views" />
            </FormTab>
            <FormTab label="comments">
                <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);
