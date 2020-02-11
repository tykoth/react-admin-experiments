import React from 'react';

// import CategoryList from './CategoryList';
// import CategoryEdit from './CategoryEdit';
import CategoryCreate from './CategoryCreate';

import {
    List,
    EditButton,
    DeleteButton,
    SaveButton,
    // TextInput,
    TextField
} from 'react-admin';
import { IgnoreFormProps, NodeView, Tree, NodeActions } from 'ra-tree-ui-materialui';

const CategoriesActions = props => (
    <NodeActions {...props}>
        <SaveButton />
        <IgnoreFormProps> {/* This is important to not get warnings about unknown props with those buttons */}
            <EditButton />
            <DeleteButton />
        </IgnoreFormProps>
    </NodeActions>
);

const CategoriesList = (props) => (
    <List {...props} perPage={10000}>
        <Tree>
            <NodeView actions={<CategoriesActions />}>
                <TextField source="name" />
            </NodeView>
        </Tree>
    </List>
);

export default {
    list: CategoriesList,
    // edit: CategoryEdit,
    // icon: CategoryIcon,
    create: CategoryCreate
};
