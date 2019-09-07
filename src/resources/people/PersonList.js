import React from 'react';
import {
    // BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    // NumberField,
    Responsive,
    SearchInput,
    CloneButton
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
// import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';
import Button from '@material-ui/core/Button';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';
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

const PersonActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
        <RefreshButton />
        {/* Add your custom actions */}
        <Button color="primary" onClick={alert}>Custom Action</Button>
    </CardActions>
);
const PersonList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<PersonFilter />}
        sort={{ field: 'last_seen', order: 'DESC' }}
        actions={<PersonActions/>}
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
