//resources/ideas/IdeaCreate.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SimpleForm, EditButton, Create, TextInput, ArrayInput, SimpleFormIterator, DateInput, DateTimeInput, LongTextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { required } from 'ra-core';
import { RichTextInput } from 'ra-input-rich-text';
const defaultValue = { created: Date.now() };
const IdeaCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <SimpleForm defaultValue={defaultValue}>
            <TextInput autoFocus source="name" />
            <LongTextInput source="description" />

            <DateTimeInput source="created" />
            {/* <RichTextInput source="body"  /> */}
            {/* <ArrayInput
                source="params"
                defaultValue={[
                    {
                        param: 'url',
                        value: 'http://google.com',
                    },
                ]}
            >
                <SimpleFormIterator>
                    <TextInput source="param" />
                    <TextInput source="value" />
                </SimpleFormIterator>
            </ArrayInput> */}
        </SimpleForm>
    </Create>
);

export default IdeaCreate;
