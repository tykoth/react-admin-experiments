import React from 'react';
import {
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    FormTab,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import NbItemsField from '../orders/NbItemsField';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import { styles } from './PersonCreate';

const PersonTitle = ({ record }) =>
    record ? <FullNameField record={record} size={32} /> : null;

const PersonEdit = ({ classes, ...props }) => (
    <Edit title={<PersonTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.persons.tabs.identity">
                <TextInput
                    
                    source="avatar"
                    formClassName={classes.first_name}
                />
                <TextInput
                    source="first_name"
                    formClassName={classes.first_name}
                />
                <TextInput
                    source="last_name"
                    formClassName={classes.last_name}
                />
                <TextInput
                    type="email"
                    source="email"
                    validation={{ email: true }}
                    fullWidth={true}
                    formClassName={classes.email}
                />
                <DateInput source="birthday" />
            </FormTab>
            <FormTab label="resources.persons.tabs.address" path="address">
                <LongTextInput
                    source="address"
                    formClassName={classes.address}
                />
                <TextInput source="zipcode" formClassName={classes.zipcode} />
                <TextInput source="city" formClassName={classes.city} />
            </FormTab>
            <FormTab label="resources.persons.tabs.orders" path="orders">
                <ReferenceManyField
                    addLabel={false}
                    sort={{ field: 'date', order: 'DESC' }}
                    reference="commands"
                    target="person_id"
                >
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="reference" />
                        <NbItemsField />
                        <NumberField
                            source="total"
                            options={{ style: 'currency', currency: 'USD' }}
                        />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.persons.tabs.reviews" path="reviews">
                <ReferenceManyField
                    addLabel={false}
                    sort={{ field: 'date', order: 'DESC' }}
                    reference="reviews"
                    target="person_id"
                >
                    <Datagrid filter={{ status: 'approved' }}>
                        <DateField source="date" />
                        <ProductReferenceField />
                        <StarRatingField />
                        <TextField
                            source="comment"
                            cellClassName={classes.comment}
                        />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.persons.tabs.stats" path="stats">
                <SegmentsInput />
                <NullableBooleanInput source="has_newsletter" />
                <DateField
                    source="first_seen"
                    style={{ width: 128, display: 'inline-block' }}
                />
                <DateField
                    source="latest_purchase"
                    style={{ width: 128, display: 'inline-block' }}
                />
                <DateField
                    source="last_seen"
                    style={{ width: 128, display: 'inline-block' }}
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(PersonEdit);
