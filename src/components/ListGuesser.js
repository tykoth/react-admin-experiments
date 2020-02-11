import React, { Component } from 'react';
import inflection from 'inflection';
import { withStyles } from '@material-ui/core/styles';
import {
    ListController,
    getElementsFromRecords,
    InferredElement,
} from 'ra-core';
import {
Datagrid,
ArrayField,
SingleFieldList,
ChipField,
BooleanField,
DateField,
EmailField,
TextField,
NumberField,
ReferenceField,
ReferenceArrayField,
UrlField,
ListView 
} from 'react-admin';
// import listFieldTypes from './listFieldTypes';
const styles = {}

const listFieldTypes = {
    table: {
        component: props => <Datagrid rowClick="edit" {...props} />, // eslint-disable-line react/display-name
        representation: (_, children) => `        <Datagrid rowClick="edit">
${children.map(child => `            ${child.getRepresentation()}`).join('\n')}
        </Datagrid>`,
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: ({ children, ...props }) => (
            <ArrayField {...props}>
                <SingleFieldList>
                    <ChipField
                        source={children.length > 0 && children[0].props.source}
                    />
                </SingleFieldList>
            </ArrayField>
        ),
        representation: (props, children) =>
            `<ArrayField source="${
                props.source
            }"><SingleFieldList><ChipField source="${children.length > 0 &&
                children[0].getProps()
                    .source}" /></SingleFieldList></ArrayField>`,
    },
    boolean: {
        component: BooleanField,
        representation: props => `<BooleanField source="${props.source}" />`,
    },
    date: {
        component: DateField,
        representation: props => `<DateField source="${props.source}" />`,
    },
    email: {
        component: EmailField,
        representation: props => `<EmailField source="${props.source}" />`,
    },
    id: undefined,
    // id: {
    //     component: TextField,
    //     representation: props => `<TextField source="${props.source}" />`,
    // },
    number: {
        component: NumberField,
        representation: props => `<NumberField source="${props.source}" />`,
    },
    reference: {
        component: ReferenceField,
        representation: props =>
            `<ReferenceField source="${props.source}" reference="${
                props.reference
            }"><TextField source="id" /></ReferenceField>`,
    },
    referenceChild: {
        component: props => <TextField source="id" {...props} />, // eslint-disable-line react/display-name
        representation: () => `<TextField source="id" />`,
    },
    referenceArray: {
        component: ReferenceArrayField,
        representation: props =>
            `<ReferenceArrayField source="${props.source}" reference="${
                props.reference
            }"><TextField source="id" /></ReferenceArrayField>`,
    },
    referenceArrayChild: {
        component: props => <TextField source="id" {...props} />, // eslint-disable-line react/display-name
        representation: () => `<TextField source="id" />`,
    },
    richText: undefined, // never display a rich text field in a datagrid
    string: {
        component: TextField,
        representation: props => `<TextField source="${props.source}" />`,
    },
    url: {
        component: UrlField,
        representation: props => `<UrlField source="${props.source}" />`,
    },
};
export class ListViewGuesser extends Component {
    state = {
        inferredChild: null,
    };
    componentDidUpdate() {
        const { ids, data, resource } = this.props;
        if (ids.length > 0 && data && !this.state.inferredChild) {
            const inferredElements = getElementsFromRecords(
                ids.map(id => data[id]),
                listFieldTypes
            );
            const inferredChild = new InferredElement(
                listFieldTypes.table,
                null,
                inferredElements
            );

            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log(
                    `Guessed List:

export const ${inflection.capitalize(
                        inflection.singularize(resource)
                    )}List = props => (
    <List {...props}>
${inferredChild.getRepresentation()}
    </List>
);`
                );
            this.setState({ inferredChild: inferredChild.getElement() });
        }
    }

    render() {
        return <ListView {...this.props}>{this.state.inferredChild}</ListView>;
    }
}

ListViewGuesser.propTypes = ListView.propTypes;

const ListGuesser = props => (
    <ListController {...props}>
        {controllerProps => <ListViewGuesser {...props} {...controllerProps} />}
    </ListController>
);

export default withStyles(styles)(ListGuesser);