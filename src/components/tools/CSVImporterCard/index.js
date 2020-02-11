import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography, TextField, Grid , Card, Button } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
import { emphasize } from '@material-ui/core/styles/colorManipulator'

import CSVImporterCard from './CSVImporterCard'

import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
// import Dexie from 'dexie'


const styles = theme => ({
  root: {
    // flexGrow: 1,
    // width: '100%',
  },

  input: {
    display: 'flex',
    padding: 10,
    fontSize: 30
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
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
    position: 'relative'
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
    transform: 'translateZ(0)'
  },
  layout: {
    width: 'auto'
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
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  // button: {
  //     marginTop: theme.spacing.unit * 3,
  //     marginLeft: theme.spacing.unit,
  // },

  // button: {
  //     margin: theme.spacing.unit,
  // },
  inputH: {
    display: 'none'
  },

  cardMedia: {
    position: 'relative',
    opacity: 0.5,
    height: 140
  },
  cardMediaBlocker: {

    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    opacity: '1'
  },

  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,

    margin: theme.spacing.unit
  },

  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})

class MainDashboard extends Component {
  constructor (props) {
    super(props)

    // console.log(['wat', JSON.parse(localStorage.getItem('menuItems'))]);
    this.state = {
      rows: [],
      dialogOpen: false,
      imageResults: [],
      smartTextareaModal: false,
      started: false,
      value: 0,
      json: [],
      reactGridHeaders: [],
      materialTableColumns: [],
      fields: [],
      tableName: null,
      progressOne: 0,
      progressTwo: 0,
      progress: 0,
      activeStep: 0,
      csvImporterCardStep: 0,
      csvImporterCardMaxSteps: 10,
      nlpInput: '',
      text: ''
    }

    // this.rawData = [];

    this.importData = this.importData.bind(this)
    this.alaSqlImport = this.alaSqlImport.bind(this)

    this.handleChange = this.handleChange.bind(this)

    this.getImportedData = this.getImportedData.bind(this)
  }

  getImportedData (data) {
    this.setState(data)
  }

  alaSqlImport () {

  }

  // importData () {
  //   const { fields, json, version, tableName } = this.state

  //   const db = new Dexie('APP3');
  //   db.version(4).stores({
  //     gitlogs: '++id,repository,commit_hash,author,date,message,changed_files,lines_added,lines_deleted'
  //   });
    
  //   db.open();
  //   db.table('gitlogs').bulkAdd(json).then(function(lastKey) {
  //       console.log('Done adding 100,000 raindrops all over the place');
  //       console.log("Last raindrop's id was: " + lastKey); // Will be 100000.
  //       alert('Fecho');
  //   });
  // }

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

  handleChange (json) {
    this.setState({ json: json })
  }

  render () {
    const { classes } = this.props
    const {
      dialogOpen, started, fields, json, materialTableColumns, reactGridHeaders, value, locked,
      progressOne,
      progressTwo, progress, activeStep, smartTextareaModal,
      csvImporterCardStep, csvImporterCardMaxSteps, playCogs, imageSrc, imageResults, nlpInput
    } = this.state
    const graphData = { nodes: [], links: [] }

    // const { json } = this.state;

    return (
      <Card>

        <Grid container spacing={16}>

          <Grid item xs={3}>
            <CSVImporterCard onSuccess={this.getImportedData} />
            {json.length > 0 && <Button color-theme="primary" 
                variant="raised" onClick={this.importData}>    Dump All to DB</Button> }
          </Grid>
          <Grid item xs={3} style={{maxHeight:'300px'}}>
              {json.length}
              {json.length > 0 && <Editor
              value={json}
              mode="tree"
              allowedModes={['code', 'text', 'tree']}
              onChange={this.handleChange}
              height={200}
            />}
            
          </Grid>

          <Grid item xs={6}>
            {fields && fields.map(f => <TextField label={f} />)}
            {/* <AceEditor
                            mode="javascript"
                            value={JSON.stringify(json)}
                        /> */}
          </Grid>
        </Grid>
      </Card>
    )
  }
}

MainDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}
// export default ;

export default withStyles(styles, { withTheme: true })(MainDashboard)
