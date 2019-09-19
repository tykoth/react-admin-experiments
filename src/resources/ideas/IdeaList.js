//resources/ideas/IdeaList.js
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { push } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Drawer, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/core/Avatar';
import {
    DateField, ReferenceField,
    Datagrid, EditButton, DeleteButton, ShowButton, List, TextField,
    SimpleList,
    CardActions,
    CreateButton
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import IdeaCreate from './IdeaCreate';

const styles = {
    drawerContent: {
        width: 300
    }
};

const cardStyle = {
    width: "20%",
    minHeight: 200,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const IdeaGrid = ({ ids, data, basePath }) => (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>
            <CardHeader
                title={<TextField record={data[id]} source="name" />}
                subheader={<DateField record={data[id]} source="created_at" />}
                avatar={<Avatar icon={<PersonIcon />} />}
            />
            <CardContent>
                <TextField record={data[id]} source="description" />
            </CardContent>
            <CardContent>
                
            </CardContent>
            <CardActions>
                <EditButton resource="ideas" basePath={basePath} record={data[id]} />
                <DeleteButton resource="ideas" basePath={basePath} record={data[id]} />
            </CardActions>
        </Card>
    )}
    </div>
);
const IdeaListActions = ({ basePath }) => (
    <CardActions>
        <CreateButton basePath={basePath} />
    </CardActions>
);
class IdeaList extends React.Component {
    render() {
        const { push, classes, ...props } = this.props;
        return (
            <Fragment>
                <List {...props}

                    actions={<IdeaListActions />}

                >
                    <IdeaGrid />
                    {/* <Datagrid>
                        <TextField source="name" />
                        <EditButton />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid> */}
                    {/* <SimpleList
                        primaryText={record => record.name}
                        secondaryText={record => `${record.description}`}
                        tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
                    /> */}

                </List>
                <Route path="/ideas/create">
                    {({ match }) => (
                        <Dialog
                            fullWidth={true}
                            maxWidth={"md"}
                            onClose={this.handleClose}
                            aria-labelledby="simple-dialog-title"
                            open={!!match}>
                            <DialogTitle id="form-dialog-title">Create </DialogTitle>
                            <DialogContent>
                                <DialogContentText></DialogContentText>

                                <IdeaCreate
                                    // className={classes.drawerContent}
                                    onCancel={this.handleClose}
                                    {...props}
                                />
                            </DialogContent>

                        </Dialog>
                        // <Drawer
                        //     open={!!match}
                        //     anchor="right"
                        //     onClose={this.handleClose}
                        // >
                        //     <IdeaCreate
                        //         className={classes.drawerContent}
                        //         onCancel={this.handleClose}
                        //         {...props}
                        //     />
                        // </Drawer>
                    )}
                </Route>

            </Fragment>
        );
    }

    handleClose = () => {
        this.props.push('/ideas');
    };
}

export default compose(
    connect(
        undefined,
        { push }
    ),
    withStyles(styles)
)(IdeaList);