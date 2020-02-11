import React from 'react';
import {
    translate,
    Filter,
    List,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from './GridList';
import ServerCreate from './ServerCreate';

const quickFilterStyles = {
    root: {
        marginBottom: '0.7em',
    },
};

const QuickFilter = translate(
    withStyles(quickFilterStyles)(({ classes, label, translate }) => (
        <Chip className={classes.root} label={translate(label)} />
    ))
);

export const ServerFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput
            source="category_id"
            reference="categories"
            sort={{ field: 'id', order: 'ASC' }}
        >
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter
            label="resources.Servers.fields.stock_lte"
            source="stock_lte"
            defaultValue={10}
        />
    </Filter>
);

const ServerList = props => (

    <Fragment>
    <List
        {...props}
        filters={<ServerFilter />}
        perPage={20}
        sort={{ field: 'id', order: 'ASC' }}
    >
        <GridList />
    </List>
                <Route path="/servers/create">
                    {({ match }) => (
                        <Drawer
                            open={!!match}
                            anchor="right"
                            onClose={this.handleClose}
                        >
                            <ServerCreate
                                className={classes.drawerContent}
                                onCancel={this.handleClose}
                                {...props}
                            />
                        </Drawer>
                    )}
                </Route>
                <Route path="/servers/:id">
                    {({ match }) => {
                        const isMatch =
                            match &&
                            match.params &&
                            match.params.id !== 'create';

                        return (
                            <Drawer
                                open={isMatch}
                                anchor="right"
                                onClose={this.handleClose}
                            >
                                {isMatch ? (
                                    <ServerEdit
                                        className={classes.drawerContent}
                                        id={isMatch ? match.params.id : null}
                                        onCancel={this.handleClose}
                                        {...props}
                                    />
                                ) : (
                                    <div className={classes.drawerContent} />
                                )}
                            </Drawer>
                        );
                    }}
                </Route>

            </Fragment>
);

export default ServerList;


// import React, { Component } from 'react';
// // import { withStyles } from '@material-ui/core/styles';
// // import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import db from '../../../app/database';
// import MUIDataTable from "mui-datatables";

// import MaterialTable from 'material-table'

// import "react-table/react-table.css";

// import SchemaForm from 'jsonschema-form-for-material-ui';

// import JSONSchemaForm from "react-jsonschema-form";

// import Grid from '@material-ui/core/Grid';

// import { Typography, Stepper, Step, StepLabel, TextField, Card, CardContent, IconButton, CardMedia, DialogTitle, DialogContent, Dialog, DialogActions } from '@material-ui/core';
// import { Button, Menu, MenuItem, Drawer } from '@material-ui/core';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// // import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import SSHBox from '../../../components/SSHBox'
// import ShortcutBox from '../../../components/ShortcutBox'
// // import * as JSONEditor from 'jsoneditor';
// import JSONEditorDemo from '../../../components/Editor/JSONEditor';

// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import { DialogContentText, Paper, BottomNavigation } from 'material-ui';
// import IconPicker from '../../../components/IconPicker';

// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// const drawerWidth = 500;
// const styles = theme => ({

//   root: {
//     // position:'relative',
//     // bottom:'0px',
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400,
//   },
//   input: {
//     marginLeft: 8,
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     width: 1,
//     height: 28,
//     margin: 4,
//   },
//   drawerPaper: {
//     // position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     // width: theme.spacing.unit * 7,
//     width: 0,
//     [theme.breakpoints.up('sm')]: {
//       // width: theme.spacing.unit * 9,
//       width: 0,
//     },
//   }
// });

// const steps = ['Objetivo', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     default:
//       throw new Error('Unknown step');
//   }
// }



// class ServersList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       lastInsertedId: null,
//       limit: 5,
//       offset: 0,
//       page: 0,
//       pages: 0,
//       count: null,
//       orderBy: null,
//       data: [],
//       locked: false,

//       top: false,
//       left: false,
//       bottom: false,
//       right: false,

//       activeStep: 0,
//       content:''
//     }
//     this.tableName = 'servers';
//     this.isRemote = false;
//     // this.state = { todos: [] };
//     this.handleAddTodo = this.handleAddTodo.bind(this);
//     // this.toggleDrawer = this.toggleDrawer.bind(this);
//     // this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
//     // this.handleToggleTodo = this.handleToggleTodo.bind(this);
//     this.receiveMessage = this.receiveMessage.bind(this);
    
//   }
//   handleNext = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep + 1,
//     }));
//   };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1,
//     }));
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0,
//     });
//   };
//   // toggleDrawer(side, open) => () => {

//   //   console.log(['toggleDrawer', side, open]);
//   //   this.setState({
//   //     [side]: open,
//   //   });
//   // };

//   receiveMessage(msg){
//     this.setState({
//       content:msg.msg
//     })

//   }
//   componentDidMount() {
//     // this.getData();

//   }


//   getData(options) {

//     const params = Object.assign(this.state, options);


//     db.table(this.tableName).count((count) => {
//       let collection = db.table(this.tableName);
//       collection = collection.orderBy(params.orderBy)

//       if (params.direction === 'desc') {
//         collection = collection.reverse();
//       }

//       collection
//         .offset(params.offset)
//         .limit(params.limit)
//         .toArray()
//         .then((data) => {

//           // 1 - fix for dates, why?
//           data.map((row) => {
//             return Object.assign(row, {
//               name: row.name || "",
//               ip: row.ip || "",
//               hostname: row.hostname || "",
//               operating_system: row.operating_system || "",
//               ssh_port: row.ssh_port || "",
//               created: row.created.toString(),
//               updated: row.updated.toString(),
//             })
//           })
//           // console.log(data);
//           // this.setState({
//           //     data:data
//           // })
//           this.setState({
//             pages: Math.ceil(count / params.limit),
//             count: count,
//             data: data,
//             locked: false
//           });
//         })

//     });
//   }
//   handleAddTodo(input) {



//     const insert = Object.assign(input.formData, {
//       created: Date.now(), updated: Date.now()
//     });

//     db.table(this.tableName)
//       .add(insert)
//       .then((id) => {
//         this.getData();
//       });
//   }

//   render() {

//     const schema = {
//       "title": "Add Server",
//       "description": "",
//       "type": "object",
//       "required": [
//         // "title"
//       ],
//       "properties": {

//         "name": {
//           "type": "string",
//           "title": "name"
//         },
//         "ip": {
//           "type": "string",
//           "title": "ip"
//         },
//         "hostname": {
//           "type": "string",
//           "title": "hostname"
//         },
//         "status": {
//           "type": "string",
//           "title": "status"
//         },
//         "operating_system": {
//           "type": "string",
//           "title": "operating_system"
//         },
//         "ssh_port": {
//           "type": "string",
//           "title": "ssh_port"
//         }
//       }
//     }

//     const uiSchema = {
//       //   "title": {
//       //     "ui:autofocus": true,
//       //     "ui:emptyValue": ""
//       //   }
//     }

//     const initialFormData = {
//       // "title":""
//     }


//     const { classes, theme } = this.props;
//     const { data, page, pages, limit, offset, count, right, activeStep, content} = this.state;

//     return (

//       <div>


//         <Drawer anchor="right"
//           className={classes.drawer}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           open={right}
//           onClose={() => {
//             return this.setState({ right: false });
//           }}>

//         </Drawer>
//             <MaterialTable

//               title="Servidores"
//               options={{

//                 toolbar: true,
//                 maxBodyHeight: 360,
//                 header: true,
//                 search: true,
//                 columnsButton: true,
//                 exportButton: true,
//                 paginationType: 'normal',
//                 pageSizeOptions: [0],
//                 actionsColumnIndex: -1,
//               }}
//               columns={[
//                 { title: 'Nome', field: 'name' },
//                 { title: 'IP ', field: 'ip' },
//                 { title: 'Hostname ', field: 'hostname' },
//                 { title: 'Status ', field: 'status' },
//                 { title: 'OS ', field: 'operating_system' },
//               ]}

//               data={query =>
//                 new Promise((resolve, reject) => {

//                   var page = query.page;
//                   var limit = query.pageSize;
//                   var offset = (page !== 0) ? page * limit : 0;
//                   // if($offset > 0){
//                   //   $page = (($offset+$limit) / $limit);
//                   // } 
//                   console.log(query);
//                   console.log([
//                     query.page, query.pageSize, page, limit, offset
//                   ]);

//                   db.table('servers').count((count) => {

//                     let collection = db.table('servers');
//                     // collection = collection.orderBy((query.orderBy !== null) ? query.orderBy.field : null);

//                     if (query.orderDirection === 'servers') {
//                       collection = collection.reverse();
//                     }

//                     collection
//                       .offset(offset)
//                       .limit(limit)
//                       .toArray()
//                       .then((todos) => {
//                         resolve({
//                           data: todos,
//                           page: page,
//                           totalCount: count,
//                         })
//                         // this.setState({ todos });
//                       });
//                   })
//                 })
//               }


//               detailPanel={[
//                 {
//                   tooltip:'ShortcutBox',  
//                   render:rowData => {
//                     return (
//                       <ShortcutBox hostname={rowData.hostname} />
//                     )
//                   }
//                 },{
//                   icon:'multiline_chart',
//                   tooltip:'Stats',
//                   render:rowData => {
//                     return (
//                       <SSHBox hostname={rowData.hostname} height={200} />
//                     )
//                   }
//                 }
//               ]}
              



//               onRowClick={(event, rowData, togglePanel) => togglePanel()}
//               actions={[
//                 {
//                   icon: 'wifi',
//                   tooltip: 'Ping',
//                   onClick: (event, rowData) => {
//                     alert('Ping  ' + rowData.name)
//                   },
//                 },
//                 // rowData => ({
//                 //   icon: 'account_circle',
//                 //   tooltip: 'Connect',
//                 //   disabled: rowData.birthYear >= 2000,
//                 //   onClick: (event, rowData) => {
//                 //     alert('Connect ' + rowData.name)
//                 //   },
//                 // }),
//                 // {
//                 //   icon: 'account_circle',
//                 //   tooltip: 'Fetch Data',
//                 //   onClick: (event, rowData) => {
//                 //     alert('Fetch Data from ' + rowData.name)
//                 //   },
//                 //   iconProps: {
//                 //     style: {
//                 //       fontSize: 30,
//                 //       color: 'green',
//                 //     },
//                 //   },
//                 // },
//               ]}

//               editable={{
//                 onRowAdd: newData =>
//                   new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                       {
//                         // alert('Insert');
//                         // console.log(newData);
//                         // const todo = {
//                         //   title: input.formData.title,
//                         //   created_at:new Date()
//                         // }


//                         db.table('servers')
//                           .add(Object.assign(newData, {
//                             name: newData.name || "",
//                             ip: newData.ip || "",
//                             hostname: newData.hostname || "",
//                             operating_system: newData.operating_system || "",
//                             ssh_port: newData.ssh_port || "",
//                             created: Date.now(),
//                             updated: Date.now()
//                           }))
//                           .then((id) => {
//                             // this.getData();          
//                           });
//                         /* const data = this.state.data;
//                     data.push(newData);
//                     this.setState({ data }, () => resolve()); */
//                       }
//                       resolve()
//                     }, 1000)
//                   }),
//                 onRowUpdate: (newData, oldData) =>
//                   new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                       {


//                         console.log([newData, oldData]);
//                         newData.update = Date.now();
//                         db.table('servers').update(newData.id, newData).then((updated) => {
//                           console.log(updated);
//                           alert('update made');
//                         })
//                         /* const data = this.state.data;
//                 const index = data.indexOf(oldData);
//                 data[index] = newData;                
//                 this.setState({ data }, () => resolve()); */
//                       }
//                       resolve()
//                     }, 1000)
//                   }),
//                 onRowDelete: oldData =>
//                   new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                       {
//                         /* let data = this.state.data;
//                 const index = data.indexOf(oldData);
//                 data.splice(index, 1);
//                 this.setState({ data }, () => resolve()); */
//                       }
//                       resolve()
//                     }, 1000)
//                   }),
//               }}
//             />
//       </div>
//     )
//   }
// }


// ServersList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ServersList);