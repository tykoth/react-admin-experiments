import React from 'react';
import {
    Create,
    DateInput,
    FormTab,
    // LongTextInput,
    TabbedForm,
    TextInput,
    DateTimeInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
    name: { display: 'inline-block' },
    
};

const defaultValue = { created: Date.now() };
const HostCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <TabbedForm defaultValue={defaultValue}>
            <FormTab label="Host">
                <TextInput source="name" />
                <TextInput source="description" />
                <TextInput source="ip" />
                <TextInput source="hostname" />
                <TextInput source="macaddress" />
                <TextInput source="operating_system" />
                <DateTimeInput source="created" />
            </FormTab>

            <FormTab label="Services" path="services">
            </FormTab>
            
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(HostCreate);
