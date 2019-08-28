import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Dexie from 'dexie';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import AceEditor from 'react-ace';
import Editor from 'react-medium-editor';

// import classNames from 'classnames';
// import Chip from '@material-ui/core/Chip';
// import CancelIcon from '@material-ui/icons/Cancel';
// import { autoPlay } from 'react-swipeable-views-utils';
// import NoSsr from '@material-ui/core/NoSsr';
// import SwipeableViews from 'react-swipeable-views';
// import CardContent from '@material-ui/core/CardContent';
// import WebmGogs from './ezgif.com-gif-to-webm.webm'
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CSVToArray from './CSVToArray';
// import Select from 'react-select';
// import AddIcon from '@material-ui/icons/Add';
// import JSONEditorDemo from '../components/Editor/JSONEditor';
// import SmartTextarea from '../components/SmartTextarea';
// import DragSample from '../components/DragSample';
// import Draggable from 'react-draggable';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import SignPad from '../components/SignPad'
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import AppBar from '@material-ui/core/AppBar';
// import Modal from '@material-ui/core/Modal';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import InputIcon from '@material-ui/icons/Input';
// import ViewListIcon from '@material-ui/icons/ViewList';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import FindInPageIcon from '@material-ui/icons/FindInPage';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
// import MapIcon from '@material-ui/icons/Map';
// import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import CSVImporterCard from './CSVImporterCard';
// import Table from '@material-ui/core/Table';
// import StepLabel from '@material-ui/core/StepLabel';
// import Step from '@material-ui/core/Step';
// import Stepper from '@material-ui/core/Stepper';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import alasql from 'alasql';
// import MaterialTable from 'material-table';
// import Proxies from '../app/tables/Proxies'
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContextProvider } from 'react-dnd'
// import SortableContainer  from '../components/Sortable/Container';
// import IconPicker from '../components/IconPicker';
// import logosvg from '../logo.svg'
// import EventSvg from '../event.svg'
// import ReactDataGrid from 'react-data-grid';
// import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';




require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');


const db = new Dexie('APP');


require('tracking');
require('tracking/build/data/face-min.js');
require('tracking/build/data/eye-min.js');
require('tracking/build/data/mouth-min.js');

const tracking = window.tracking;

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const steps = ['Objetivo', 'Payment details', 'Review your order'];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {children}
            {/* <Box p={3}>{children}</Box> */}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `scrollable-force-tab-${index}`,
//         'aria-controls': `scrollable-force-tabpanel-${index}`,
//     };
// }
//
// const suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
// ];
//
// const dataOptions = [
//     'bigIncrements',
//     'bigInteger',
//     'binary',
//     'boolean',
//     'char',
//     'date',
//     'dateTime',
//     'dateTimeTz',
//     'decimal',
//     'double',
//     'enum',
//     'float',
//     'geometry',
//     'geometryCollection',
//     'increments',
//     'integer',
//     'ipAddress',
//     'json',
//     'jsonb',
//     'lineString',
//     'longText',
//     'macAddress',
//     'mediumIncrements',
//     'mediumInteger',
//     'mediumText',
//     'morphs',
//     'multiLineString',
//     'multiPoint',
//     'multiPolygon',
//     'nullableMorphs',
//     'nullableTimestamps',
//     'point',
//     'polygon',
//     'rememberToken',
//     'smallIncrements',
//     'smallInteger',
//     'softDeletes',
//     'softDeletesTz',
//     'string',
//     'text',
//     'time',
//     'timeTz',
//     'timestamp',
//     'timestampTz',
//     'timestamps',
//     'timestampsTz',
//     'tinyIncrements',
//     'tinyInteger',
//     'unsignedBigInteger',
//     'unsignedDecimal',
//     'unsignedInteger',
//     'unsignedMediumInteger',
//     'unsignedSmallInteger',
//     'unsignedTinyInteger',
//     'uuid',
//     'year'
// ];
//
// const columns = [
//     { key: "id", name: "ID", editable: true },
//     { key: "title", name: "Title", editable: true },
//     { key: "complete", name: "Complete", editable: true }
// ];

const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
];

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};



// const uuidv4 = function() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// };
//
//
// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }
//
// function getModalStyle() {
//     const top = 50;// + rand();
//     const left = 50;// + rand();
//
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

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
    // paper: {
        // position: 'absolute',
        // zIndex: 1,
        // marginTop: theme.spacing.unit,
        // left: 0,
        // right: 0,
    // },
    // divider: {
    //     height: theme.spacing.unit * 2,
    // },
    modalPaper: {
        // position: 'absolute',
        // width: theme.spacing.unit * 50,
        // backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing.unit * 4,
        // outline: 'none',
    },
    appBar: {
        position: 'relative',
    },
    gridTile: {
        // height:'400px'
    },
    gridRoot: {
        // height:'400px',
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflowX: 'scroll',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {

        // overflowX: 'scroll',
        // height:'400px',
        //   flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    layout: {
        width: 'auto',
        //   marginLeft: theme.spacing.unit * 2,
        //   marginRight: theme.spacing.unit * 2,
        //   [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        //     width: 600,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        //   },
    },
    paper: {
        // height:'400px',
        // //   marginTop: theme.spacing.unit * 3,
        // //   marginBottom: theme.spacing.unit * 3,
        // padding: theme.spacing.unit * 2,
        // [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        //     // marginTop: theme.spacing.unit * 6,
        //     marginBottom: theme.spacing.unit * 6,
        //     padding: theme.spacing.unit * 3,
        // },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    // button: {
    //     marginTop: theme.spacing.unit * 3,
    //     marginLeft: theme.spacing.unit,
    // },


    // button: {
    //     margin: theme.spacing.unit,
    // },
    inputH: {
        display: 'none',
    },


    cardMedia:{
        position:'relative',
        opacity:0.5,
        height: 140,
    },
    cardMediaBlocker:{

        backgroundColor:'black',
        position:'absolute',
        width:'100%',
        height:'100%',
        top:'0px',
        left:'0px',
        opacity:'1'
    }
    ,


    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,

        margin: theme.spacing.unit,
    },

    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

// const components = {
//     Control,
//     Menu,
//     MultiValue,
//     NoOptionsMessage,
//     Option,
//     Placeholder,
//     SingleValue,
//     ValueContainer,
// };

// function Control(props) {
//     return (
//         <TextField
//             fullWidth
//             InputProps={{
//                 inputComponent,
//                 inputProps: {
//                     className: props.selectProps.classes.input,
//                     inputRef: props.innerRef,
//                     children: props.children,
//                     ...props.innerProps,
//                 },
//             }}
//             {...props.selectProps.textFieldProps}
//         />
//     );
// }
//
// function Option(props) {
//     return (
//         <MenuItem
//             buttonRef={props.innerRef}
//             selected={props.isFocused}
//             component="div"
//             style={{
//                 fontWeight: props.isSelected ? 500 : 400,
//             }}
//             {...props.innerProps}
//         >
//             {props.children}
//         </MenuItem>
//     );
// }
//
// function Placeholder(props) {
//     return (
//         <Typography
//             color="textSecondary"
//             className={props.selectProps.classes.placeholder}
//             {...props.innerProps}
//         >
//             {props.children}
//         </Typography>
//     );
// }
//
// function SingleValue(props) {
//     return (
//         <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
//             {props.children}
//         </Typography>
//     );
// }
//
// function ValueContainer(props) {
//     return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
// }
//
// function MultiValue(props) {
//     return (
//         <Chip
//             tabIndex={-1}
//             label={props.children}
//             className={classNames(props.selectProps.classes.chip, {
//                 [props.selectProps.classes.chipFocused]: props.isFocused,
//             })}
//             onDelete={props.removeProps.onClick}
//             deleteIcon={<CancelIcon {...props.removeProps} />}
//         />
//     );
// }
//
// function NoOptionsMessage(props) {
//     return (
//         <Typography
//             color="textSecondary"
//             className={props.selectProps.classes.noOptionsMessage}
//             {...props.innerProps}
//         >
//             {props.children}
//         </Typography>
//     );
// }

// function inputComponent({ inputRef, ...props }) {
//     return <div ref={inputRef} {...props} />;
// }
//
// function Menu(props) {
//     return (
//         <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
//             {props.children}
//         </Paper>
//     );
// }

class MainDashboard extends Component {

    constructor(props) {
        super(props);

        // console.log(['wat', JSON.parse(localStorage.getItem('menuItems'))]);
        this.state = {
            rows:rows,
            dialogOpen:false,
            imageResults:[],
            smartTextareaModal:false,
            started:false,
            value:0,
            json:[],
            reactGridHeaders:[],
            materialTableColumns:[],
            fields:[],
            tableName:null,
            progressOne:0,
            progressTwo:0,
            progress:0,
            activeStep:0,
            csvImporterCardStep:0,
            csvImporterCardMaxSteps:10,
            nlpInput:'',
            text:''
        };

        // this.rawData = [];
        this.onChangeSmartTextarea = this.onChangeSmartTextarea.bind(this);

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.chooseImage = this.chooseImage.bind(this);

        // this.processContent = this.processContent.bind(this);
        this.importData = this.importData.bind(this);
        this.alaSqlImport = this.alaSqlImport.bind(this);


        // this.openPasteModal = this.openPasteModal.bind(this);
        // this.closePasteModal = this.closePasteModal.bind(this);
        // this.fetchUrl = this.fetchUrl.bind(this);
        this.checkData = this.checkData.bind(this);

        // this.onDragOver = this.onDragOver.bind(this);
        // this.handleNLP = this.handleNLP.bind(this);

        this.getImportedData = this.getImportedData.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    // onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    //     // this.setState(state => {
    //     //   const rows = state.rows.slice();
    //     //   for (let i = fromRow; i <= toRow; i++) {
    //     //     rows[i] = { ...rows[i], ...updated };
    //     //   }
    //     // });
    // };

    openDialog() {
        this.setState({ dialogOpen:true });
    }

    handleCloseDialog() {
        this.setState({ dialogOpen:false });
    }

    getImportedData(data) {
        this.setState(data);
    }

    // handleNLP(event) {
    //     this.setState({
    //         nlpInput:event.target.value
    //     });
    //     // var doc = nlp('London is calling')
    //     // alert(doc.sentences().toNegative().out('text'));
    // }

    // onDragOver(event) {
    //     console.log([event])
    //     event.preventDefault();
    // }
    //
    // fetchUrl() {
    //
    // }

    alaSqlImport() {

    }

    importData() {
        const {fields, json, version, tableName} = this.state;
        // const version = db.version();
        const schema = {}
        schema[tableName] = "++id," + fields.join().toString();
        db.version(version+1).stores(schema);


        db.table(tableName).bulkAdd(json).then(function(lastKey) {
            console.log("Done adding 100,000 raindrops all over the place");
            console.log("Last raindrop's id was: " + lastKey); // Will be 100000.
            alert("Fecho");
        });

        // new Dexie("ReactSampleDB").open().then((db) => {
        //     this.setState({
        //         version:db.verno,
        //         columnstring:"++id," + fields.join().toString(),
        //         tableName:prompt('table')
        //     });
        //     // version = db.verno;
        //     // var columnstring = "++id," + fields.join().toString();
        //     // var tableName = prompt('table');
        //     // alert("Version" + columnstring);
        //     // console.log(['version', version, columnstring]);
        //     // collectionName:"++id{}",
        // })
        console.log(version);
    }

    // function getType(str){
    //     if (typeof str !== 'string') str = str.toString();
    //     var nan = isNaN(Number(str));
    //     var isfloat = /^\d*(\.|,)\d*$/;
    //     var commaFloat = /^(\d{0,3}(,)?)+\.\d*$/;
    //     var dotFloat = /^(\d{0,3}(\.)?)+,\d*$/;
    //     var date = /^\d{0,4}(\.|\/)\d{0,4}(\.|\/)\d{0,4}$/;
    //     var email = /^[A-za-z0-9._-]*@[A-za-z0-9_-]*\.[A-Za-z0-9.]*$/;
    //     var phone = /^\+\d{2}\/\d{4}\/\d{6}$/g;
    //     if (!nan){
    //         if (parseFloat(str) === parseInt(str)) return "integer";
    //         else return "float";
    //     }
    //     else if (isfloat.test(str) || commaFloat.test(str) || dotFloat.test(str)) return "float";
    //     else if (date.test(str)) return "date";
    //     else {
    //         if (email.test(str)) return "e-mail";
    //         else if (phone.test(str)) return "phone";
    //         else return "string";
    //     }
    // }

    checkData() {
        document.getElementById("video").play();
        this.state.json.forEach((row, idx) => {
            // console.log([idx, row]);
        })
        document.getElementById("video").pause();
        // this.setState({
        //     playCogs:false
        // })

        // this.setState({progressTwo:Math.round(((idx/this.state.json)*100))})
    }

    // chooseImage(event) {
    //     // document.getElementById("video").play();
    //     const fileReader = new FileReader();
    //
    //     fileReader.onloadend = (event) => {
    //         this.setState({
    //             imageSrc:fileReader.result
    //         });
    //
    //         setTimeout(() => {this.detectFace()}, 1000);
    //
    //     };
    //
    //     fileReader.readAsDataURL(event.target.files[0]);
    // }

    detectFace = () => {
        var img = document.getElementById('imageSrc');
        var tracker = new tracking.ObjectTracker(['face']);
        tracker.setStepSize(1.7);
        tracking.track('#imageSrc', tracker);
        // $(".rect").remove();
        tracker.on('track', (event, etc) => {
            alert('track started');
            let dataUrls = []
            event.data.forEach((rect) => {
                // window.plot(rect.x, rect.y, rect.width, rect.height);
                var times = img.naturalWidth / img.offsetWidth;
                var canvas = document.createElement('canvas');
                canvas.width = 300;
                canvas.height = 300;
                var ctx = canvas.getContext('2d');
                // console.log([rect.x, rect.y, rect.width, rect.height]);
                ctx.drawImage(img, rect.x*times, rect.y*times, rect.width*times, rect.height*times, 0, 0, 300, 300);
                var dataUrl = canvas.toDataURL();
                dataUrls.push(dataUrl);
                // var $img = $("<img>");
                // $img.attr('src', dataUrl).width('100%');

                // $img.on('load', getCollorPallete)
                // $("#foco").empty().append($img);

                // saveAs(dataUrl, 'avatar-' + Date.now() + '.png')
            });

            this.setState({
                imageResults:dataUrls
            });

        });
    };

    handleChangeTab(event, value) {
        this.setState({ value });

    }

    handleChange(text, medium) {
        this.setState({ text:text });

    }

    componentDidMount() {

        console.log(tracking);
        // new Dexie("ReactSampleDB").open().then((db) => {
        //     this.setState({
        //         version:db.verno,
        //         tableName:'table_' + Date.now()
        //     });
        // })
    }

    // parseGraphData() {
    //     const { json } = this.state;
    //     const links = [];
    //     // const groups = {};
    //     let nodes = json.slice(0,10).map((item) => {
    //         // if(!groups[item.country_code]){
    //         //     groups[item.country_code] = [];
    //         // }
    //
    //         // groups[item.country_code].push(item.id)
    //         return Object.assign(item, {
    //
    //         });
    //     });
    //
    //     // Object.keys(groups).forEach((index, ids) => {
    //
    //     //     groups[index].forEach((uuidSource, idSource) => {
    //     //         groups[index].forEach((uuidTarget, idTarget) => {
    //
    //     //             links.push({
    //     //                 source:uuidSource,
    //     //                 target:uuidTarget
    //     //             });
    //
    //     //         });
    //     //     });
    //     //     // console.log([index, ids])
    //     // })
    //     // console.log(groups);
    //     // json.forEach(function(i){
    //
    //
    //     // })
    //     return {
    //         nodes:nodes,
    //         links:links
    //     }
    // }

    onChangeSmartTextarea(event) {
        this.processContent(event.target.value);
    }

    //
    // renderIndexedbPaper(tableName, fields)
    // {
    //     const { classes } = this.props;
    //     return (
    //         <Paper className={classes.paper}>
    //             <h3>IndexedDB </h3>
    //             <pre style={{
    //                 wordWrap:'break-word',
    //                 whiteSpace:'pre-line',
    //             }}>
    //
    // db.version(2).stores({'{\n\t'}
    //                 {tableName}:"++id{fields.map(i => `,${i}`)}",
    //                 {'\n}'});
    //
    // </pre>
    //         </Paper>
    //     )
    //
    // }
    //
    //
    // renderPHPClassPaper(tableName, fields){
    //     const { classes } = this.props;
    //     return (
    //         <Paper className={classes.paper}>
    //             <h3>PHP </h3>
    //             <pre style={{
    //                 wordWrap:'break-word',
    //                 whiteSpace:'pre-line',
    //             }}>
    //
    //         class {tableName} extends Model{'{\n\t'}
    //
    //                 {fields.map(i => `\npublic ${i};`)}
    //                 {'\n}'}
    //
    //         </pre>
    //         </Paper>
    //     );
    // }
    //
    // renderReactSelect()
    // {
    //
    //     const selectStyles = {
    //         input: base => ({
    //             ...base,
    //             //   color: theme.palette.text.primary,
    //             '& input': {
    //                 font: 'inherit',
    //             },
    //         }),
    //     };
    //
    //     return (<NoSsr>
    //
    //         {/* <Select
    //             classes={classes}
    //             styles={selectStyles}
    //             textFieldProps={{
    //             label: 'Label',
    //             InputLabelProps: {
    //                 shrink: true,
    //             },
    //             }}
    //             options={suggestions}
    //             components={components}
    //             value={this.state.multi}
    //             onChange={function(event){console.log(event);}}
    //             placeholder="Select multiple countries"
    //             isMulti
    //         /> */}
    //     </NoSsr>);
    // }
    //
    // openPasteModal(event) {
    //     this.setState({smartTextareaModal:true});
    // }
    //
    // closePasteModal(event) {
    //     this.setState({smartTextareaModal:false});
    // }
    //
    // renderSqlPaper(tableName, fields){
    //     const { classes } = this.props;
    //     return (
    //         <Paper className={classes.paper}>
    //             <h3>SQL </h3>
    //             <pre style={{
    //                 wordWrap:'break-word',
    //                 whiteSpace:'pre-line',
    //             }}>
    //
    //         CREATE TABLE {tableName} ({'\n\t'}
    //                 {fields.map(i => `,\n'${i}' text null default ''`)}
    //                 {'\n'});
    //
    //         </pre>
    //         </Paper>
    //     );
    // }
    //
    // handlecsvImporterCardStepChange = csvImporterCardStep => {
    //     this.setState({ csvImporterCardStep });
    // };

    render() {

        // const { classes  } = this.props;
        // const { dialogOpen, started, fields, json, materialTableColumns , reactGridHeaders, value, locked,
        //     progressOne,
        //     progressTwo, progress, activeStep, smartTextareaModal,
        //     csvImporterCardStep, csvImporterCardMaxSteps,  playCogs, imageSrc, imageResults,nlpInput
        // } = this.state;
        // const graphData = {nodes:[], links:[]};
        //
        // const NLPTesterCard = (props) => {
        //     return ( <Card>
        //             <CardMedia
        //                 className={classes.cardMedia}
        //                 title="Paella dish"
        //                 image={"http://localhost/uploads/image/proxy/random.php"}
        //                 backgroundColor="blue"
        //             >
        //
        //
        //                 <video id="video" controls={false} autoPlay={playCogs} loop={true} style={{ width:'100%', height:'100%'}}>
        //                     <source src={WebmGogs} type="video/webm" />
        //                 </video>
        //                 <div style={{ backgroundColor:'black', position:'relative' }}></div>
        //             </CardMedia>
        //             <CardHeader>CSV Parser</CardHeader>
        //
        //             <CardContent align="center">
        //                 <TextField label="Type to analise" fullWidth
        //                            value={nlpInput}
        //                            onChange={this.handleNLP}/>
        //                 {nlpInput}
        //             </CardContent>
        //         </Card>
        //     );
        //
        // };




        // const WebCrawlerCard = (props) => {
        //     return (
        //         <Card>
        //             {/* <CardMedia
        //             className={classes.cardMedia}
        //             image={"http://localhost/uploads/image/proxy/content4.coedcherry.com/met-art/127550/w_F2883E95F5B1FD24D99CB2043B937465.jpg"}
        //             title="Paella dish"
        //             />
        //
        //             <CardContent>
        //
        //                 <Typography gutterBottom variant="h5" component="h2">
        //                     Create data by URL
        //                 </Typography>
        //                 <Typography component="p">
        //                     Set the starting URL to schedule a new scan
        //                 </Typography>
        //             </CardContent>
        //             <CardActions>
        //
        //
        //             <Button onClick={this.fetchUrl} variant="outlined" component="span" className={classes.button}>
        //                 Fetch URL
        //             </Button>
        //
        //             </CardActions> */}
        //         </Card>  );
        // };

        // const graphData = this.parseGraphData();
        return (
            <Card>

                <Grid container spacing={16}>


                    <Grid item xs={6}>
                        <Editor text={this.state.text} onChange={this.handleChange} />

                        <AceEditor
                            mode="javascript"
                            value={"//List"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <AceEditor
                            mode="javascript"
                            value={"//Edit"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <AceEditor
                            mode="javascript"
                            value={"//Create"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <AceEditor
                            mode="javascript"
                            value={"//Delete"}
                        />
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

MainDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
// export default ;

export default withStyles(styles, { withTheme: true })(MainDashboard);
