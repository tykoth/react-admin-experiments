import React from 'react';
import {
    Edit,
    DateInput,
    FormTab,
    // LongTextInput,
    TabbedForm,
    TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
    name: { display: 'inline-block' },
    
};

const HostEdit = ({ classes, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="Host">
                <TextInput source="name" />
                <TextInput source="description" />
                <TextInput source="ip" />
                <TextInput source="hostname" />
                <TextInput source="macaddress" />
                <TextInput source="operating_system" />
            </FormTab>

            <FormTab label="Services" path="address">
            </FormTab>

            <FormTab label="Services" path="address">
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(HostEdit);
