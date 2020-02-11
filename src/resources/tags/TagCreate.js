import React from 'react';
import {
    Create,
    // DateInput,
    FormTab,
    // LongTextInput,
    TabbedForm,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const TagCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Tags">
            <TextInput source="name"/>
            <TextInput source="parent_id"/>
            <TextInput source="published"/>
            </FormTab>
            
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(TagCreate);
