import React from 'react';
import { ReferenceField } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerReferenceField = props => (
    <ReferenceField source="person_id" reference="persons" {...props}>
        <FullNameField />
    </ReferenceField>
);

CustomerReferenceField.defaultProps = {
    source: 'person_id',
    addLabel: true,
};

export default CustomerReferenceField;
