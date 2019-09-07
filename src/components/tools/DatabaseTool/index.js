import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';


import {
    Edit,
    DateInput,
    FormTab,
    // LongTextInput,
    TabbedForm,
    TextInput,
} from 'react-admin';
import Dexie from 'dexie';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { translate, Title } from 'react-admin';


const styles = theme => ({
    root: {
        // flexGrow: 1,
        // width: '100%',
    },

    input: {
        display: 'flex',
        padding: 10,
        fontSize:30
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
});
class DatabaseTool extends Component {

    constructor(props) {
        super(props);
        let db = new Dexie('APP');
        db.open().then(() => {
            alert("OIE");

            console.log("Version", db.verno);
            console.log("Tables", db.tables.map(({name, schema}) => ({
            name,
            schema
            })
            ));
        })
        // console.log(['wat', JSON.parse(localStorage.getItem('menuItems'))]);
        this.state = {
            started:false,
            db:db
        };

        // db.tables.forEach(function (table) {
        //     console.log("Schema of " + table.name + ": " + JSON.stringify(table.schema));
        // });
    }

    render() {
        const { db } = this.state;
        db.open();
        console.log([
            db,
            'opa'
        ]);

        db.tables.forEach(function (table) {
            console.log("Schema of " + table.name + ": " + JSON.stringify(table.schema));
        });
        db.open();
        console.log([
            db,
            'aaaaa'
        ]);
        // db.tables.forEach(function (table) {
        //     console.log("Schema of " + table.name + ": " + JSON.stringify(table.schema));
        // });
        return (

            <Card>
                <Title title="a"/>
        <TabbedForm toolbar={false}>
            <FormTab label="Host">
                <TextInput source="name" />
            </FormTab>

            <FormTab label="Services" path="address">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                </Table>
            </FormTab>

            <FormTab label="Services" path="address">
            </FormTab>
        </TabbedForm>
            </Card>
        )
    }
}

DatabaseTool.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
// export default ;

export default withStyles(styles, { withTheme: true })(DatabaseTool);