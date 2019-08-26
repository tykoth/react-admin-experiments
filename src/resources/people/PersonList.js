import React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    Responsive,
    SearchInput,
    CloneButton
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';

const PersonFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <DateInput source="last_seen_gte" />
        <NullableBooleanInput source="has_ordered" />
        <NullableBooleanInput source="has_newsletter" defaultValue />
        <SegmentInput />

    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const PersonList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<PersonFilter />}
        sort={{ field: 'last_seen', order: 'DESC' }}
        perPage={25}
    >
        <Responsive
            xsmall={<MobileGrid />}
            medium={
                <Datagrid>
                    <CustomerLinkField />
                    <DateField source="last_seen" type="date" />
                    
                    <SegmentsField />
                    <EditButton />
            <CloneButton />

                </Datagrid>
            }
        />
    </List>
);

export default withStyles(styles)(PersonList);
