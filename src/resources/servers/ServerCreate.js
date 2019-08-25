import React from 'react';
import {
    Create,
    DateInput,
    FormTab,
    LongTextInput,
    TabbedForm,
    TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
    name: { display: 'inline-block' },
    
};

const ServerCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.servers.tabs.identity">
                <TextInput
                    source="name"
                />
                
                <RichTextInput source="description" addLabel={false} />
                <TextInput
                    source="ip"
                    // formClassName={classes.ip}
                />
                <DateInput source="birthday" />
            </FormTab>
            <FormTab label="resources.servers.tabs.address" path="address">
            </FormTab>
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(ServerCreate);
