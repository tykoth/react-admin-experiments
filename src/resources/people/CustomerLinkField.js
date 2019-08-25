import React from 'react';
import { Link } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerLinkField = props => (
    <Link to={`/people/${props.record.id}/show`}>
        <FullNameField {...props} />
    </Link>
);

CustomerLinkField.defaultProps = {
    source: 'person_id',
    addLabel: true,
};

export default CustomerLinkField;
