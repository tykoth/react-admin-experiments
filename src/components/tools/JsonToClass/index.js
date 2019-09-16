/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import CodeIcon from '@material-ui/icons/Code'

import { withStyles } from '@material-ui/core/styles'
import { emphasize } from '@material-ui/core/styles/colorManipulator'
import Dexie from 'dexie'
import { Grid, Typography } from '@material-ui/core'
import 'brace/mode/javascript'
import 'brace/theme/github'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import {
  Create,
  FormTab,
  SaveButton,
  AutocompleteInput,
  TabbedForm,
  SimpleForm,
  TextInput,
  Toolbar,
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
  ListView,
  required,
  translate
} from 'react-admin'
import {
  LiveProvider,
  LiveEditor,
  LivePreview
} from 'react-live'

const db = new Dexie('APP')

function TabPanel (props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

const rows = [
  { id: 0, title: 'Task 1', complete: 20 },
  { id: 1, title: 'Task 2', complete: 40 },
  { id: 2, title: 'Task 3', complete: 60 }
]
function TabContainer (props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

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

const jsonData = {
  name: 'DailyGraphResponse',
  id: 67,
  type: 'q',
  sync: true,
  version: 3,
  uid: 5092,
  success: true,
  status: 0,
  textual: '',
  symbolId: {
    sourceId: '12',
    symbol: 'MGLU3'
  },
  graphicalBars: [
    {
      date: '2018-01-02',
      open: 10.03,
      max: 10.22,
      min: 9.72,
      close: 9.84,
      acumulatedQtty: 14856800,
      volume: 149753525
    },
    {
      date: '2018-01-03',
      open: 9.8,
      max: 10.09,
      min: 9.61,
      close: 9.71,
      acumulatedQtty: 10346400,
      volume: 102800146
    },
    {
      date: '2018-01-04',
      open: 9.92,
      max: 9.98,
      min: 9.84,
      close: 9.94,
      acumulatedQtty: 11984000,
      volume: 120012582
    },
    {
      date: '2018-01-05',
      open: 9.97,
      max: 10.03,
      min: 9.72,
      close: 9.75,
      acumulatedQtty: 7671200,
      volume: 75938174
    },
    {
      date: '2018-01-08',
      open: 9.73,
      max: 9.93,
      min: 9.72,
      close: 9.75,
      acumulatedQtty: 7199200,
      volume: 71166110
    },
    {
      date: '2018-01-09',
      open: 9.83,
      max: 9.87,
      min: 9.46,
      close: 9.51,
      acumulatedQtty: 7756000,
      volume: 75251563
    },
    {
      date: '2018-01-10',
      open: 9.49,
      max: 9.73,
      min: 9.38,
      close: 9.61,
      acumulatedQtty: 8691200,
      volume: 84457259
    },
    {
      date: '2018-01-11',
      open: 9.73,
      max: 9.77,
      min: 9.58,
      close: 9.63,
      acumulatedQtty: 4441600,
      volume: 43195525
    },
    {
      date: '2018-01-12',
      open: 9.52,
      max: 9.73,
      min: 9.47,
      close: 9.62,
      acumulatedQtty: 6808800,
      volume: 66125608
    },
    {
      date: '2018-01-15',
      open: 9.7,
      max: 9.83,
      min: 9.65,
      close: 9.79,
      acumulatedQtty: 5019200,
      volume: 49311634
    },
    {
      date: '2018-01-16',
      open: 9.8,
      max: 9.93,
      min: 9.7,
      close: 9.76,
      acumulatedQtty: 6184000,
      volume: 61309632
    },
    {
      date: '2018-01-17',
      open: 9.82,
      max: 9.87,
      min: 9.69,
      close: 9.77,
      acumulatedQtty: 3880800,
      volume: 38236462
    },
    {
      date: '2018-01-18',
      open: 9.8,
      max: 9.82,
      min: 9.49,
      close: 9.61,
      acumulatedQtty: 8516800,
      volume: 82831572
    },
    {
      date: '2018-01-19',
      open: 9.63,
      max: 9.75,
      min: 9.52,
      close: 9.52,
      acumulatedQtty: 4407200,
      volume: 42753857
    },
    {
      date: '2018-01-22',
      open: 9.64,
      max: 9.65,
      min: 9.4,
      close: 9.55,
      acumulatedQtty: 5279200,
      volume: 50726889
    },
    {
      date: '2018-01-23',
      open: 9.51,
      max: 9.54,
      min: 9.25,
      close: 9.29,
      acumulatedQtty: 8972800,
      volume: 84738893
    },
    {
      date: '2018-01-24',
      open: 9.3,
      max: 10.04,
      min: 9.3,
      close: 10.04,
      acumulatedQtty: 17773600,
      volume: 175668398
    },
    {
      date: '2018-01-26',
      open: 10.17,
      max: 10.48,
      min: 10.04,
      close: 10.27,
      acumulatedQtty: 16419200,
      volume: 170523888
    },
    {
      date: '2018-01-29',
      open: 10.17,
      max: 10.49,
      min: 10.05,
      close: 10.49,
      acumulatedQtty: 6470400,
      volume: 67527965
    },
    {
      date: '2018-01-30',
      open: 10.47,
      max: 10.72,
      min: 10.34,
      close: 10.5,
      acumulatedQtty: 8988000,
      volume: 95860661
    },
    {
      date: '2018-01-31',
      open: 10.67,
      max: 10.71,
      min: 10.43,
      close: 10.48,
      acumulatedQtty: 8268800,
      volume: 87991275
    },
    {
      date: '2018-02-01',
      open: 10.45,
      max: 10.66,
      min: 10.45,
      close: 10.65,
      acumulatedQtty: 6952000,
      volume: 74260923
    },
    {
      date: '2018-02-02',
      open: 10.63,
      max: 10.63,
      min: 10.36,
      close: 10.4,
      acumulatedQtty: 7883200,
      volume: 82931311
    },
    {
      date: '2018-02-05',
      open: 10.36,
      max: 10.36,
      min: 10,
      close: 10,
      acumulatedQtty: 7524000,
      volume: 77113924
    },
    {
      date: '2018-02-06',
      open: 9.77,
      max: 10.14,
      min: 9.69,
      close: 10.12,
      acumulatedQtty: 11092800,
      volume: 110881247
    },
    {
      date: '2018-02-07',
      open: 10.13,
      max: 10.13,
      min: 9.79,
      close: 9.8,
      acumulatedQtty: 8950400,
      volume: 89406003
    },
    {
      date: '2018-02-08',
      open: 9.92,
      max: 9.98,
      min: 9.39,
      close: 9.43,
      acumulatedQtty: 10952000,
      volume: 105629555
    },
    {
      date: '2018-02-09',
      open: 9.49,
      max: 9.56,
      min: 8.97,
      close: 9.16,
      acumulatedQtty: 12852000,
      volume: 119993797
    },
    {
      date: '2018-02-14',
      open: 9.24,
      max: 9.26,
      min: 8.96,
      close: 9.26,
      acumulatedQtty: 14768800,
      volume: 136036007
    },
    {
      date: '2018-02-15',
      open: 9.36,
      max: 9.82,
      min: 9.36,
      close: 9.82,
      acumulatedQtty: 9752800,
      volume: 95226884
    },
    {
      date: '2018-02-16',
      open: 9.93,
      max: 10.07,
      min: 9.55,
      close: 9.75,
      acumulatedQtty: 8747200,
      volume: 86062141
    },
    {
      date: '2018-02-19',
      open: 9.87,
      max: 10.2,
      min: 9.81,
      close: 10.2,
      acumulatedQtty: 7073600,
      volume: 71449101
    },
    {
      date: '2018-02-20',
      open: 10.1,
      max: 10.29,
      min: 9.94,
      close: 10.29,
      acumulatedQtty: 7567200,
      volume: 77767772
    },
    {
      date: '2018-02-21',
      open: 10.3,
      max: 10.4,
      min: 9.86,
      close: 9.87,
      acumulatedQtty: 20840000,
      volume: 210681607
    },
    {
      date: '2018-02-22',
      open: 9.99,
      max: 10.14,
      min: 9.93,
      close: 10.1,
      acumulatedQtty: 9064800,
      volume: 92015248
    },
    {
      date: '2018-02-23',
      open: 10.67,
      max: 10.84,
      min: 10.56,
      close: 10.79,
      acumulatedQtty: 47092800,
      volume: 509012411
    },
    {
      date: '2018-02-26',
      open: 10.82,
      max: 11.7,
      min: 10.79,
      close: 11.7,
      acumulatedQtty: 24065600,
      volume: 274458465
    },
    {
      date: '2018-02-27',
      open: 11.64,
      max: 11.76,
      min: 11.29,
      close: 11.35,
      acumulatedQtty: 23376000,
      volume: 270142394
    },
    {
      date: '2018-02-28',
      open: 11.29,
      max: 11.53,
      min: 11.07,
      close: 11.29,
      acumulatedQtty: 12882400,
      volume: 146174410
    },
    {
      date: '2018-03-01',
      open: 11.29,
      max: 11.51,
      min: 11.14,
      close: 11.43,
      acumulatedQtty: 13273600,
      volume: 151824691
    },
    {
      date: '2018-03-02',
      open: 11.32,
      max: 11.53,
      min: 11.19,
      close: 11.51,
      acumulatedQtty: 10319200,
      volume: 118143771
    },
    {
      date: '2018-03-05',
      open: 11.5,
      max: 11.51,
      min: 11.16,
      close: 11.21,
      acumulatedQtty: 9416000,
      volume: 107413008
    },
    {
      date: '2018-03-06',
      open: 11.32,
      max: 11.4,
      min: 10.98,
      close: 11.06,
      acumulatedQtty: 8561600,
      volume: 95852119
    },
    {
      date: '2018-03-07',
      open: 11.08,
      max: 11.16,
      min: 10.87,
      close: 11.16,
      acumulatedQtty: 5640800,
      volume: 62702577
    },
    {
      date: '2018-03-08',
      open: 11.04,
      max: 11.07,
      min: 10.69,
      close: 10.94,
      acumulatedQtty: 14163200,
      volume: 155242871
    },
    {
      date: '2018-03-09',
      open: 10.94,
      max: 11.43,
      min: 10.85,
      close: 11.25,
      acumulatedQtty: 18320800,
      volume: 208226800
    },
    {
      date: '2018-03-12',
      open: 11.43,
      max: 11.6,
      min: 11.3,
      close: 11.48,
      acumulatedQtty: 9576800,
      volume: 110615986
    },
    {
      date: '2018-03-13',
      open: 11.53,
      max: 11.62,
      min: 11.18,
      close: 11.35,
      acumulatedQtty: 11772800,
      volume: 135608232
    },
    {
      date: '2018-03-14',
      open: 11.37,
      max: 11.43,
      min: 11.05,
      close: 11.12,
      acumulatedQtty: 10895200,
      volume: 122593753
    },
    {
      date: '2018-03-15',
      open: 11.07,
      max: 11.35,
      min: 10.99,
      close: 11.28,
      acumulatedQtty: 8183200,
      volume: 92114778
    },
    {
      date: '2018-03-16',
      open: 11.32,
      max: 11.53,
      min: 11.23,
      close: 11.5,
      acumulatedQtty: 13945600,
      volume: 160925355
    },
    {
      date: '2018-03-19',
      open: 11.26,
      max: 11.4,
      min: 11.12,
      close: 11.25,
      acumulatedQtty: 7927200,
      volume: 90055255
    },
    {
      date: '2018-03-20',
      open: 11.35,
      max: 11.43,
      min: 11.15,
      close: 11.16,
      acumulatedQtty: 7016800,
      volume: 79362719
    },
    {
      date: '2018-03-21',
      open: 11.21,
      max: 11.53,
      min: 11.16,
      close: 11.53,
      acumulatedQtty: 10741600,
      volume: 123921737
    },
    {
      date: '2018-03-22',
      open: 11.55,
      max: 11.89,
      min: 11.41,
      close: 11.83,
      acumulatedQtty: 13032000,
      volume: 153187401
    },
    {
      date: '2018-03-23',
      open: 11.78,
      max: 12,
      min: 11.72,
      close: 11.76,
      acumulatedQtty: 9979200,
      volume: 119098052
    },
    {
      date: '2018-03-26',
      open: 11.9,
      max: 12.4,
      min: 11.86,
      close: 12.4,
      acumulatedQtty: 19372800,
      volume: 238911990
    },
    {
      date: '2018-03-27',
      open: 12.48,
      max: 12.61,
      min: 11.94,
      close: 11.99,
      acumulatedQtty: 29496800,
      volume: 360089650
    },
    {
      date: '2018-03-28',
      open: 11.97,
      max: 12.19,
      min: 11.79,
      close: 12.03,
      acumulatedQtty: 13136000,
      volume: 158455980
    },
    {
      date: '2018-03-29',
      open: 12.17,
      max: 12.27,
      min: 12.04,
      close: 12.14,
      acumulatedQtty: 7149600,
      volume: 87647323
    },
    {
      date: '2018-04-02',
      open: 12.21,
      max: 12.39,
      min: 12.02,
      close: 12.14,
      acumulatedQtty: 10123200,
      volume: 124771149
    },
    {
      date: '2018-04-03',
      open: 12.26,
      max: 12.33,
      min: 12.03,
      close: 12.03,
      acumulatedQtty: 11266400,
      volume: 138225258
    },
    {
      date: '2018-04-04',
      open: 12.03,
      max: 12.03,
      min: 11.41,
      close: 11.97,
      acumulatedQtty: 15119200,
      volume: 179569145
    },
    {
      date: '2018-04-05',
      open: 12.32,
      max: 12.33,
      min: 12.1,
      close: 12.24,
      acumulatedQtty: 8822400,
      volume: 108789400
    },
    {
      date: '2018-04-06',
      open: 12.21,
      max: 12.28,
      min: 12.08,
      close: 12.16,
      acumulatedQtty: 7856800,
      volume: 96337376
    },
    {
      date: '2018-04-09',
      open: 12.16,
      max: 12.28,
      min: 11.78,
      close: 11.98,
      acumulatedQtty: 8920000,
      volume: 108192903
    },
    {
      date: '2018-04-10',
      open: 12.15,
      max: 12.16,
      min: 11.6,
      close: 11.77,
      acumulatedQtty: 14550400,
      volume: 172508121
    },
    {
      date: '2018-04-11',
      open: 11.72,
      max: 12.01,
      min: 11.61,
      close: 12.01,
      acumulatedQtty: 9315200,
      volume: 111652728
    },
    {
      date: '2018-04-12',
      open: 11.91,
      max: 12.48,
      min: 11.91,
      close: 12.34,
      acumulatedQtty: 13051200,
      volume: 161575313
    },
    {
      date: '2018-04-13',
      open: 12.23,
      max: 12.29,
      min: 12.09,
      close: 12.18,
      acumulatedQtty: 5043200,
      volume: 61804366
    },
    {
      date: '2018-04-16',
      open: 12.18,
      max: 12.32,
      min: 11.88,
      close: 11.93,
      acumulatedQtty: 12534400,
      volume: 152197574
    },
    {
      date: '2018-04-17',
      open: 12.07,
      max: 12.14,
      min: 11.94,
      close: 12.06,
      acumulatedQtty: 6336800,
      volume: 76746626
    },
    {
      date: '2018-04-18',
      open: 12.19,
      max: 12.2,
      min: 11.86,
      close: 11.9,
      acumulatedQtty: 12018400,
      volume: 145333744
    },
    {
      date: '2018-04-19',
      open: 11.98,
      max: 12.01,
      min: 11.69,
      close: 11.74,
      acumulatedQtty: 8444000,
      volume: 100111085
    },
    {
      date: '2018-04-20',
      open: 11.71,
      max: 12.14,
      min: 11.69,
      close: 12.05,
      acumulatedQtty: 10328000,
      volume: 124321187
    },
    {
      date: '2018-04-23',
      open: 12.07,
      max: 12.42,
      min: 11.97,
      close: 12.42,
      acumulatedQtty: 10016000,
      volume: 123944087
    },
    {
      date: '2018-04-24',
      open: 12.4,
      max: 12.68,
      min: 12.32,
      close: 12.57,
      acumulatedQtty: 9563200,
      volume: 120818947
    },
    {
      date: '2018-04-25',
      open: 12.43,
      max: 12.66,
      min: 12.25,
      close: 12.61,
      acumulatedQtty: 7195200,
      volume: 90426870
    },
    {
      date: '2018-04-26',
      open: 12.61,
      max: 13.04,
      min: 12.55,
      close: 13,
      acumulatedQtty: 9152000,
      volume: 118314657
    },
    {
      date: '2018-04-27',
      open: 13.06,
      max: 13.28,
      min: 12.89,
      close: 13.1,
      acumulatedQtty: 17125600,
      volume: 224075243
    },
    {
      date: '2018-04-30',
      open: 13.08,
      max: 13.4,
      min: 13.07,
      close: 13.27,
      acumulatedQtty: 7478400,
      volume: 99922819
    },
    {
      date: '2018-05-02',
      open: 13.31,
      max: 13.34,
      min: 12.75,
      close: 12.75,
      acumulatedQtty: 11412800,
      volume: 148817984
    },
    {
      date: '2018-05-03',
      open: 12.85,
      max: 12.9,
      min: 12.03,
      close: 12.09,
      acumulatedQtty: 23920800,
      volume: 296058479
    },
    {
      date: '2018-05-04',
      open: 12.19,
      max: 12.44,
      min: 11.9,
      close: 12.15,
      acumulatedQtty: 15284000,
      volume: 187923035
    },
    {
      date: '2018-05-07',
      open: 12.25,
      max: 12.39,
      min: 12.02,
      close: 12.04,
      acumulatedQtty: 9711200,
      volume: 118954476
    },
    {
      date: '2018-05-08',
      open: 13.02,
      max: 13.8,
      min: 12.73,
      close: 13.8,
      acumulatedQtty: 40232800,
      volume: 538269898
    },
    {
      date: '2018-05-09',
      open: 13.8,
      max: 14.23,
      min: 13.43,
      close: 14.01,
      acumulatedQtty: 20416800,
      volume: 286706824
    },
    {
      date: '2018-05-10',
      open: 14.01,
      max: 14.24,
      min: 13.62,
      close: 13.62,
      acumulatedQtty: 15272800,
      volume: 214296567
    },
    {
      date: '2018-05-11',
      open: 13.62,
      max: 13.83,
      min: 13.27,
      close: 13.51,
      acumulatedQtty: 11504000,
      volume: 156677713
    },
    {
      date: '2018-05-14',
      open: 13.63,
      max: 13.76,
      min: 13.11,
      close: 13.45,
      acumulatedQtty: 11840800,
      volume: 159840881
    },
    {
      date: '2018-05-15',
      open: 13.45,
      max: 13.75,
      min: 13.16,
      close: 13.24,
      acumulatedQtty: 13277600,
      volume: 178237600
    },
    {
      date: '2018-05-16',
      open: 13.19,
      max: 14.21,
      min: 13.19,
      close: 13.95,
      acumulatedQtty: 16859200,
      volume: 234221314
    },
    {
      date: '2018-05-17',
      open: 13.95,
      max: 14.1,
      min: 13.36,
      close: 13.6,
      acumulatedQtty: 13338400,
      volume: 181725425
    },
    {
      date: '2018-05-18',
      open: 13.43,
      max: 13.44,
      min: 12.75,
      close: 13.07,
      acumulatedQtty: 26288800,
      volume: 345584394
    },
    {
      date: '2018-05-21',
      open: 13.52,
      max: 13.81,
      min: 13.45,
      close: 13.62,
      acumulatedQtty: 12142400,
      volume: 166269648
    },
    {
      date: '2018-05-22',
      open: 13.69,
      max: 14.18,
      min: 13.61,
      close: 14.18,
      acumulatedQtty: 15103200,
      volume: 212371708
    },
    {
      date: '2018-05-23',
      open: 13.98,
      max: 14.09,
      min: 13.68,
      close: 13.91,
      acumulatedQtty: 11255200,
      volume: 157168114
    },
    {
      date: '2018-05-24',
      open: 13.55,
      max: 14.12,
      min: 13.43,
      close: 14.05,
      acumulatedQtty: 12412800,
      volume: 173738709
    },
    {
      date: '2018-05-25',
      open: 14.08,
      max: 14.16,
      min: 13.89,
      close: 13.93,
      acumulatedQtty: 13388000,
      volume: 189015549
    },
    {
      date: '2018-05-28',
      open: 13.72,
      max: 13.82,
      min: 12.93,
      close: 13.06,
      acumulatedQtty: 19270400,
      volume: 257765618
    },
    {
      date: '2018-05-29',
      open: 13.43,
      max: 13.71,
      min: 12.89,
      close: 12.99,
      acumulatedQtty: 20374400,
      volume: 271478879
    },
    {
      date: '2018-05-30',
      open: 13.21,
      max: 13.68,
      min: 13.07,
      close: 13.48,
      acumulatedQtty: 90257600,
      volume: 1223274858
    },
    {
      date: '2018-06-01',
      open: 13.79,
      max: 14.42,
      min: 13.62,
      close: 14.36,
      acumulatedQtty: 22248000,
      volume: 315342572
    },
    {
      date: '2018-06-04',
      open: 14.49,
      max: 15.67,
      min: 14.49,
      close: 15.46,
      acumulatedQtty: 27456000,
      volume: 419568040
    },
    {
      date: '2018-06-05',
      open: 15.04,
      max: 15.22,
      min: 14.8,
      close: 15.05,
      acumulatedQtty: 17707200,
      volume: 266758274
    },
    {
      date: '2018-06-06',
      open: 15.01,
      max: 15.01,
      min: 14.18,
      close: 14.22,
      acumulatedQtty: 18704000,
      volume: 271769835
    },
    {
      date: '2018-06-07',
      open: 14.1,
      max: 14.1,
      min: 11.85,
      close: 13.23,
      acumulatedQtty: 41078400,
      volume: 538458991
    },
    {
      date: '2018-06-08',
      open: 13.6,
      max: 13.64,
      min: 12.37,
      close: 13.12,
      acumulatedQtty: 28228800,
      volume: 369315888
    },
    {
      date: '2018-06-11',
      open: 13.38,
      max: 13.78,
      min: 13.07,
      close: 13.21,
      acumulatedQtty: 14646400,
      volume: 196929852
    },
    {
      date: '2018-06-12',
      open: 13.37,
      max: 13.91,
      min: 13.24,
      close: 13.68,
      acumulatedQtty: 19887200,
      volume: 272374787
    },
    {
      date: '2018-06-13',
      open: 13.84,
      max: 14.12,
      min: 13.51,
      close: 13.98,
      acumulatedQtty: 17304000,
      volume: 240478954
    },
    {
      date: '2018-06-14',
      open: 14.05,
      max: 15.05,
      min: 14.05,
      close: 14.85,
      acumulatedQtty: 27508800,
      volume: 406075275
    },
    {
      date: '2018-06-15',
      open: 15.05,
      max: 15.09,
      min: 14.31,
      close: 14.9,
      acumulatedQtty: 18602400,
      volume: 273632606
    },
    {
      date: '2018-06-18',
      open: 14.72,
      max: 14.86,
      min: 14.43,
      close: 14.65,
      acumulatedQtty: 9577600,
      volume: 141517500
    },
    {
      date: '2018-06-19',
      open: 14.48,
      max: 15.53,
      min: 14.34,
      close: 15.38,
      acumulatedQtty: 18573600,
      volume: 283441094
    },
    {
      date: '2018-06-20',
      open: 15.56,
      max: 16.1,
      min: 15.13,
      close: 15.13,
      acumulatedQtty: 18780800,
      volume: 295464419
    },
    {
      date: '2018-06-21',
      open: 15.17,
      max: 15.57,
      min: 15.06,
      close: 15.12,
      acumulatedQtty: 12972000,
      volume: 198955084
    },
    {
      date: '2018-06-22',
      open: 15.42,
      max: 15.5,
      min: 15.16,
      close: 15.27,
      acumulatedQtty: 8402400,
      volume: 129319524
    },
    {
      date: '2018-06-25',
      open: 15.36,
      max: 15.46,
      min: 14.95,
      close: 15.27,
      acumulatedQtty: 18207200,
      volume: 278029600
    },
    {
      date: '2018-06-26',
      open: 15.36,
      max: 15.57,
      min: 15.2,
      close: 15.39,
      acumulatedQtty: 12660000,
      volume: 195560974
    },
    {
      date: '2018-06-27',
      open: 15.41,
      max: 15.48,
      min: 15.07,
      close: 15.11,
      acumulatedQtty: 8017600,
      volume: 123221733
    },
    {
      date: '2018-06-28',
      open: 15.11,
      max: 15.57,
      min: 15.11,
      close: 15.36,
      acumulatedQtty: 10052000,
      volume: 155698336
    },
    {
      date: '2018-06-29',
      open: 15.54,
      max: 15.99,
      min: 15.51,
      close: 15.92,
      acumulatedQtty: 13955200,
      volume: 222347327
    },
    {
      date: '2018-07-02',
      open: 15.82,
      max: 16.03,
      min: 15.56,
      close: 15.6,
      acumulatedQtty: 8031200,
      volume: 127187614
    },
    {
      date: '2018-07-03',
      open: 15.77,
      max: 15.89,
      min: 15.39,
      close: 15.49,
      acumulatedQtty: 16740800,
      volume: 264475184
    },
    {
      date: '2018-07-04',
      open: 15.62,
      max: 15.72,
      min: 15.39,
      close: 15.46,
      acumulatedQtty: 4457600,
      volume: 69411909
    },
    {
      date: '2018-07-05',
      open: 15.54,
      max: 15.54,
      min: 14.84,
      close: 14.92,
      acumulatedQtty: 11042400,
      volume: 167330292
    },
    {
      date: '2018-07-06',
      open: 15.05,
      max: 15.2,
      min: 14.4,
      close: 15.13,
      acumulatedQtty: 13672800,
      volume: 201649623
    },
    {
      date: '2018-07-10',
      open: 15.29,
      max: 15.41,
      min: 14.63,
      close: 14.68,
      acumulatedQtty: 15685600,
      volume: 235635601
    },
    {
      date: '2018-07-11',
      open: 14.55,
      max: 14.96,
      min: 14.11,
      close: 14.24,
      acumulatedQtty: 10308000,
      volume: 150230480
    },
    {
      date: '2018-07-12',
      open: 14.68,
      max: 15.34,
      min: 14.44,
      close: 15.34,
      acumulatedQtty: 16994400,
      volume: 256540193
    },
    {
      date: '2018-07-13',
      open: 15.37,
      max: 15.86,
      min: 15.28,
      close: 15.62,
      acumulatedQtty: 13586400,
      volume: 213521928
    },
    {
      date: '2018-07-16',
      open: 15.67,
      max: 16.01,
      min: 15.56,
      close: 15.88,
      acumulatedQtty: 9374400,
      volume: 148866623
    },
    {
      date: '2018-07-17',
      open: 15.87,
      max: 16.46,
      min: 15.8,
      close: 16.41,
      acumulatedQtty: 12797600,
      volume: 208060662
    },
    {
      date: '2018-07-18',
      open: 16.51,
      max: 16.79,
      min: 15.74,
      close: 15.79,
      acumulatedQtty: 15473600,
      volume: 252331752
    },
    {
      date: '2018-07-19',
      open: 15.83,
      max: 16.04,
      min: 15.42,
      close: 16.04,
      acumulatedQtty: 13206400,
      volume: 209662547
    },
    {
      date: '2018-07-20',
      open: 16.41,
      max: 16.51,
      min: 16.07,
      close: 16.29,
      acumulatedQtty: 10146400,
      volume: 165935592
    },
    {
      date: '2018-07-23',
      open: 16.2,
      max: 16.27,
      min: 15.96,
      close: 16.14,
      acumulatedQtty: 4896000,
      volume: 79326873
    },
    {
      date: '2018-07-24',
      open: 16.32,
      max: 16.66,
      min: 16.31,
      close: 16.63,
      acumulatedQtty: 8722400,
      volume: 145112509
    },
    {
      date: '2018-07-25',
      open: 16.71,
      max: 16.85,
      min: 16.36,
      close: 16.54,
      acumulatedQtty: 8520000,
      volume: 141695035
    },
    {
      date: '2018-07-26',
      open: 16.64,
      max: 16.64,
      min: 16.24,
      close: 16.36,
      acumulatedQtty: 8268800,
      volume: 136243311
    },
    {
      date: '2018-07-27',
      open: 16.42,
      max: 16.56,
      min: 16.11,
      close: 16.14,
      acumulatedQtty: 9029600,
      volume: 147776219
    },
    {
      date: '2018-07-30',
      open: 16.11,
      max: 16.4,
      min: 16.09,
      close: 16.17,
      acumulatedQtty: 6480800,
      volume: 105882202
    },
    {
      date: '2018-07-31',
      open: 16.13,
      max: 16.45,
      min: 16.05,
      close: 16.45,
      acumulatedQtty: 5794400,
      volume: 94717119
    },
    {
      date: '2018-08-01',
      open: 16.42,
      max: 16.79,
      min: 16.35,
      close: 16.7,
      acumulatedQtty: 7636800,
      volume: 127973206
    },
    {
      date: '2018-08-02',
      open: 16.73,
      max: 17.02,
      min: 16.73,
      close: 17.02,
      acumulatedQtty: 7988000,
      volume: 135835049
    },
    {
      date: '2018-08-03',
      open: 17.04,
      max: 17.16,
      min: 16.83,
      close: 17.03,
      acumulatedQtty: 10752000,
      volume: 183745407
    },
    {
      date: '2018-08-06',
      open: 17.1,
      max: 17.22,
      min: 16.84,
      close: 17.16,
      acumulatedQtty: 10468800,
      volume: 178706582
    },
    {
      date: '2018-08-07',
      open: 18.47,
      max: 18.47,
      min: 17.94,
      close: 18.14,
      acumulatedQtty: 28713600,
      volume: 526321256
    },
    {
      date: '2018-08-08',
      open: 18,
      max: 18.11,
      min: 17.36,
      close: 17.41,
      acumulatedQtty: 14649600,
      volume: 260106935
    },
    {
      date: '2018-08-09',
      open: 17.51,
      max: 18.28,
      min: 17.22,
      close: 18.28,
      acumulatedQtty: 12846400,
      volume: 229319614
    },
    {
      date: '2018-08-10',
      open: 18.05,
      max: 18.14,
      min: 17.25,
      close: 17.29,
      acumulatedQtty: 15485600,
      volume: 273120092
    },
    {
      date: '2018-08-13',
      open: 17.31,
      max: 17.59,
      min: 17,
      close: 17.53,
      acumulatedQtty: 8388000,
      volume: 146799190
    },
    {
      date: '2018-08-14',
      open: 17.73,
      max: 17.78,
      min: 17.51,
      close: 17.64,
      acumulatedQtty: 5580000,
      volume: 98998218
    },
    {
      date: '2018-08-15',
      open: 17.41,
      max: 17.46,
      min: 17.1,
      close: 17.25,
      acumulatedQtty: 9864000,
      volume: 170921933
    },
    {
      date: '2018-08-16',
      open: 17.63,
      max: 17.63,
      min: 16.95,
      close: 16.95,
      acumulatedQtty: 11280000,
      volume: 195813412
    },
    {
      date: '2018-08-17',
      open: 16.91,
      max: 17.04,
      min: 16.41,
      close: 16.62,
      acumulatedQtty: 11162400,
      volume: 187508466
    },
    {
      date: '2018-08-20',
      open: 16.63,
      max: 17.21,
      min: 16.58,
      close: 17.21,
      acumulatedQtty: 7575200,
      volume: 128748787
    },
    {
      date: '2018-08-21',
      open: 17.16,
      max: 17.47,
      min: 16.29,
      close: 16.47,
      acumulatedQtty: 19540800,
      volume: 327812008
    },
    {
      date: '2018-08-22',
      open: 16.65,
      max: 16.89,
      min: 16.17,
      close: 16.69,
      acumulatedQtty: 8756000,
      volume: 145741770
    },
    {
      date: '2018-08-23',
      open: 16.72,
      max: 17.1,
      min: 16.34,
      close: 16.51,
      acumulatedQtty: 12881600,
      volume: 216309771
    },
    {
      date: '2018-08-24',
      open: 16.79,
      max: 16.9,
      min: 16.32,
      close: 16.41,
      acumulatedQtty: 7976800,
      volume: 132618347
    },
    {
      date: '2018-08-27',
      open: 16.61,
      max: 16.75,
      min: 16.27,
      close: 16.34,
      acumulatedQtty: 8990400,
      volume: 148458712
    },
    {
      date: '2018-08-28',
      open: 16.36,
      max: 16.54,
      min: 15.74,
      close: 16.09,
      acumulatedQtty: 15898400,
      volume: 256272697
    },
    {
      date: '2018-08-29',
      open: 16.18,
      max: 16.6,
      min: 16.18,
      close: 16.43,
      acumulatedQtty: 11543200,
      volume: 190665674
    },
    {
      date: '2018-08-30',
      open: 16.36,
      max: 16.62,
      min: 15.79,
      close: 15.87,
      acumulatedQtty: 9766400,
      volume: 158287190
    },
    {
      date: '2018-08-31',
      open: 16.16,
      max: 16.22,
      min: 15.89,
      close: 16.2,
      acumulatedQtty: 10414400,
      volume: 168104171
    },
    {
      date: '2018-09-03',
      open: 16.04,
      max: 16.04,
      min: 15.64,
      close: 15.73,
      acumulatedQtty: 6607200,
      volume: 104870261
    },
    {
      date: '2018-09-04',
      open: 15.74,
      max: 15.77,
      min: 14.64,
      close: 14.68,
      acumulatedQtty: 16774400,
      volume: 254074651
    },
    {
      date: '2018-09-05',
      open: 14.64,
      max: 15.26,
      min: 14.56,
      close: 15.15,
      acumulatedQtty: 13344000,
      volume: 201184380
    },
    {
      date: '2018-09-06',
      open: 15.42,
      max: 15.65,
      min: 15.24,
      close: 15.57,
      acumulatedQtty: 9080000,
      volume: 141020703
    },
    {
      date: '2018-09-10',
      open: 15.69,
      max: 15.83,
      min: 14.79,
      close: 15.15,
      acumulatedQtty: 15501600,
      volume: 236949285
    },
    {
      date: '2018-09-11',
      open: 14.81,
      max: 15.05,
      min: 14.71,
      close: 14.81,
      acumulatedQtty: 7964000,
      volume: 118843724
    },
    {
      date: '2018-09-12',
      open: 15.04,
      max: 15.11,
      min: 14.7,
      close: 14.85,
      acumulatedQtty: 9307200,
      volume: 139270246
    },
    {
      date: '2018-09-13',
      open: 14.93,
      max: 14.93,
      min: 14.29,
      close: 14.35,
      acumulatedQtty: 12500000,
      volume: 182341347
    },
    {
      date: '2018-09-14',
      open: 14.33,
      max: 14.64,
      min: 14.23,
      close: 14.43,
      acumulatedQtty: 10198400,
      volume: 147741573
    },
    {
      date: '2018-09-17',
      open: 14.42,
      max: 14.83,
      min: 14.35,
      close: 14.79,
      acumulatedQtty: 7171200,
      volume: 105074149
    },
    {
      date: '2018-09-18',
      open: 14.76,
      max: 15.54,
      min: 14.7,
      close: 15.47,
      acumulatedQtty: 12291200,
      volume: 188926736
    },
    {
      date: '2018-09-19',
      open: 15.29,
      max: 15.36,
      min: 14.8,
      close: 14.8,
      acumulatedQtty: 12988000,
      volume: 196442225
    },
    {
      date: '2018-09-20',
      open: 15.17,
      max: 15.2,
      min: 14.56,
      close: 14.74,
      acumulatedQtty: 9408800,
      volume: 140137110
    },
    {
      date: '2018-09-21',
      open: 14.86,
      max: 15.59,
      min: 14.78,
      close: 15.42,
      acumulatedQtty: 15050400,
      volume: 231227690
    },
    {
      date: '2018-09-24',
      open: 15.29,
      max: 15.29,
      min: 14.91,
      close: 15.1,
      acumulatedQtty: 8996000,
      volume: 136125098
    },
    {
      date: '2018-09-25',
      open: 14.71,
      max: 15.54,
      min: 14.69,
      close: 15.31,
      acumulatedQtty: 7876800,
      volume: 120444115
    },
    {
      date: '2018-09-26',
      open: 15.31,
      max: 15.54,
      min: 15.17,
      close: 15.19,
      acumulatedQtty: 9953600,
      volume: 153211099
    },
    {
      date: '2018-09-27',
      open: 15.33,
      max: 15.72,
      min: 15.3,
      close: 15.44,
      acumulatedQtty: 8992000,
      volume: 140523556
    },
    {
      date: '2018-09-28',
      open: 15.36,
      max: 15.61,
      min: 15.2,
      close: 15.23,
      acumulatedQtty: 8628000,
      volume: 133015889
    },
    {
      date: '2018-10-01',
      open: 15.35,
      max: 15.5,
      min: 15.05,
      close: 15.25,
      acumulatedQtty: 5328000,
      volume: 81530793
    },
    {
      date: '2018-10-02',
      open: 15.49,
      max: 16.31,
      min: 15.49,
      close: 16.22,
      acumulatedQtty: 13812800,
      volume: 222803409
    },
    {
      date: '2018-10-03',
      open: 17.05,
      max: 17.47,
      min: 17.04,
      close: 17.33,
      acumulatedQtty: 24038400,
      volume: 417071305
    },
    {
      date: '2018-10-04',
      open: 16.98,
      max: 17.39,
      min: 16.59,
      close: 17.35,
      acumulatedQtty: 15325600,
      volume: 261954716
    },
    {
      date: '2018-10-05',
      open: 17.73,
      max: 17.93,
      min: 17.39,
      close: 17.66,
      acumulatedQtty: 16601600,
      volume: 295877046
    },
    {
      date: '2018-10-08',
      open: 18.53,
      max: 18.8,
      min: 18.3,
      close: 18.47,
      acumulatedQtty: 13605600,
      volume: 253930084
    },
    {
      date: '2018-10-09',
      open: 18.4,
      max: 18.9,
      min: 18.23,
      close: 18.68,
      acumulatedQtty: 11968800,
      volume: 224878492
    },
    {
      date: '2018-10-10',
      open: 18.47,
      max: 18.63,
      min: 17.86,
      close: 17.86,
      acumulatedQtty: 13148000,
      volume: 240045722
    },
    {
      date: '2018-10-11',
      open: 18.16,
      max: 18.87,
      min: 18.15,
      close: 18.74,
      acumulatedQtty: 16512000,
      volume: 309070695
    },
    {
      date: '2018-10-15',
      open: 19.03,
      max: 19.27,
      min: 18.54,
      close: 18.65,
      acumulatedQtty: 10504800,
      volume: 199274393
    },
    {
      date: '2018-10-16',
      open: 19.03,
      max: 19.92,
      min: 18.84,
      close: 19.8,
      acumulatedQtty: 16933600,
      volume: 330885901
    },
    {
      date: '2018-10-17',
      open: 19.59,
      max: 20.27,
      min: 19.39,
      close: 20.11,
      acumulatedQtty: 14594400,
      volume: 292972541
    },
    {
      date: '2018-10-18',
      open: 20.11,
      max: 20.11,
      min: 19.75,
      close: 20.01,
      acumulatedQtty: 10462400,
      volume: 209314019
    },
    {
      date: '2018-10-19',
      open: 20.16,
      max: 21.37,
      min: 20.02,
      close: 21.02,
      acumulatedQtty: 15357600,
      volume: 317807323
    },
    {
      date: '2018-10-22',
      open: 21.14,
      max: 21.64,
      min: 20.77,
      close: 20.78,
      acumulatedQtty: 11444000,
      volume: 242647326
    },
    {
      date: '2018-10-23',
      open: 20.63,
      max: 21.29,
      min: 20.43,
      close: 21.02,
      acumulatedQtty: 11226400,
      volume: 235049419
    },
    {
      date: '2018-10-24',
      open: 21.13,
      max: 21.32,
      min: 20.89,
      close: 20.89,
      acumulatedQtty: 8834400,
      volume: 187713920
    },
    {
      date: '2018-10-25',
      open: 21.11,
      max: 21.22,
      min: 20.52,
      close: 20.92,
      acumulatedQtty: 12103200,
      volume: 253072791
    },
    {
      date: '2018-10-26',
      open: 20.99,
      max: 21,
      min: 20.43,
      close: 20.74,
      acumulatedQtty: 12222400,
      volume: 253555108
    },
    {
      date: '2018-10-29',
      open: 21.39,
      max: 21.6,
      min: 20.34,
      close: 20.7,
      acumulatedQtty: 10991200,
      volume: 231377605
    },
    {
      date: '2018-10-30',
      open: 20.91,
      max: 21.07,
      min: 20.48,
      close: 21.05,
      acumulatedQtty: 13444000,
      volume: 281561522
    },
    {
      date: '2018-10-31',
      open: 21.14,
      max: 21.37,
      min: 20.62,
      close: 20.99,
      acumulatedQtty: 9280000,
      volume: 195285741
    },
    {
      date: '2018-11-01',
      open: 21.14,
      max: 21.25,
      min: 20.77,
      close: 21.13,
      acumulatedQtty: 8716000,
      volume: 184564088
    },
    {
      date: '2018-11-05',
      open: 21.18,
      max: 21.55,
      min: 20.92,
      close: 21.51,
      acumulatedQtty: 10884800,
      volume: 232538066
    },
    {
      date: '2018-11-06',
      open: 20.7,
      max: 20.79,
      min: 19.54,
      close: 19.71,
      acumulatedQtty: 27033600,
      volume: 544565305
    },
    {
      date: '2018-11-07',
      open: 20.14,
      max: 20.19,
      min: 18.13,
      close: 18.77,
      acumulatedQtty: 38664000,
      volume: 732319232
    },
    {
      date: '2018-11-08',
      open: 18.72,
      max: 19.15,
      min: 18.34,
      close: 18.35,
      acumulatedQtty: 14698400,
      volume: 274176117
    },
    {
      date: '2018-11-09',
      open: 18.41,
      max: 18.46,
      min: 17.8,
      close: 18.21,
      acumulatedQtty: 17099200,
      volume: 311260365
    },
    {
      date: '2018-11-12',
      open: 18.28,
      max: 19.34,
      min: 18.07,
      close: 19.09,
      acumulatedQtty: 13290400,
      volume: 254107502
    },
    {
      date: '2018-11-13',
      open: 19.26,
      max: 19.74,
      min: 18.97,
      close: 19.08,
      acumulatedQtty: 13641600,
      volume: 264082280
    },
    {
      date: '2018-11-14',
      open: 19.2,
      max: 19.44,
      min: 18.59,
      close: 19.34,
      acumulatedQtty: 11627200,
      volume: 223375489
    },
    {
      date: '2018-11-16',
      open: 19.51,
      max: 19.61,
      min: 19.27,
      close: 19.46,
      acumulatedQtty: 10806400,
      volume: 211322538
    },
    {
      date: '2018-11-19',
      open: 19.52,
      max: 19.62,
      min: 19.18,
      close: 19.42,
      acumulatedQtty: 5355200,
      volume: 104597350
    },
    {
      date: '2018-11-21',
      open: 19.25,
      max: 19.51,
      min: 18.93,
      close: 19.3,
      acumulatedQtty: 7469600,
      volume: 144377474
    },
    {
      date: '2018-11-22',
      open: 19.29,
      max: 19.9,
      min: 19.28,
      close: 19.9,
      acumulatedQtty: 9015200,
      volume: 177441372
    },
    {
      date: '2018-11-23',
      open: 19.92,
      max: 20.45,
      min: 19.92,
      close: 20.19,
      acumulatedQtty: 9522400,
      volume: 193723073
    },
    {
      date: '2018-11-26',
      open: 20.39,
      max: 20.63,
      min: 19.65,
      close: 19.67,
      acumulatedQtty: 10952000,
      volume: 222129421
    },
    {
      date: '2018-11-27',
      open: 19.93,
      max: 20.99,
      min: 19.79,
      close: 20.99,
      acumulatedQtty: 11514400,
      volume: 237187766
    },
    {
      date: '2018-11-28',
      open: 20.77,
      max: 21.56,
      min: 20.65,
      close: 21.15,
      acumulatedQtty: 15602400,
      volume: 332648158
    },
    {
      date: '2018-11-29',
      open: 20.7,
      max: 21.33,
      min: 20.27,
      close: 21.3,
      acumulatedQtty: 13967200,
      volume: 292284882
    },
    {
      date: '2018-11-30',
      open: 21.08,
      max: 21.27,
      min: 20.46,
      close: 20.47,
      acumulatedQtty: 14056800,
      volume: 292466581
    },
    {
      date: '2018-12-03',
      open: 20.89,
      max: 20.93,
      min: 19.98,
      close: 20.16,
      acumulatedQtty: 9081600,
      volume: 186368331
    },
    {
      date: '2018-12-04',
      open: 20.28,
      max: 20.88,
      min: 19.98,
      close: 20.5,
      acumulatedQtty: 13332800,
      volume: 275322324
    },
    {
      date: '2018-12-05',
      open: 20.49,
      max: 20.7,
      min: 20.33,
      close: 20.51,
      acumulatedQtty: 3836000,
      volume: 79056204
    },
    {
      date: '2018-12-06',
      open: 20.21,
      max: 20.67,
      min: 20.09,
      close: 20.56,
      acumulatedQtty: 5756800,
      volume: 118136724
    },
    {
      date: '2018-12-07',
      open: 20.46,
      max: 20.79,
      min: 20.27,
      close: 20.44,
      acumulatedQtty: 6428800,
      volume: 133222788
    },
    {
      date: '2018-12-10',
      open: 20.44,
      max: 20.61,
      min: 19.95,
      close: 19.96,
      acumulatedQtty: 5544800,
      volume: 112294054
    },
    {
      date: '2018-12-11',
      open: 20.27,
      max: 20.47,
      min: 20.01,
      close: 20.44,
      acumulatedQtty: 5144000,
      volume: 104888256
    },
    {
      date: '2018-12-12',
      open: 20.5,
      max: 20.92,
      min: 20.5,
      close: 20.89,
      acumulatedQtty: 6977600,
      volume: 145803160
    },
    {
      date: '2018-12-13',
      open: 20.91,
      max: 21.09,
      min: 20.8,
      close: 20.83,
      acumulatedQtty: 4767200,
      volume: 100388724
    },
    {
      date: '2018-12-14',
      open: 20.98,
      max: 21.45,
      min: 20.86,
      close: 21.21,
      acumulatedQtty: 8799200,
      volume: 187924486
    },
    {
      date: '2018-12-17',
      open: 21.21,
      max: 21.39,
      min: 21.08,
      close: 21.15,
      acumulatedQtty: 6956000,
      volume: 148408495
    },
    {
      date: '2018-12-18',
      open: 21.23,
      max: 21.88,
      min: 21.1,
      close: 21.87,
      acumulatedQtty: 7894400,
      volume: 171883352
    },
    {
      date: '2018-12-19',
      open: 21.91,
      max: 22.46,
      min: 21.91,
      close: 22.01,
      acumulatedQtty: 8070400,
      volume: 180136598
    },
    {
      date: '2018-12-20',
      open: 22.2,
      max: 22.38,
      min: 21.52,
      close: 22.13,
      acumulatedQtty: 8156800,
      volume: 180378338
    },
    {
      date: '2018-12-21',
      open: 22,
      max: 22.73,
      min: 21.89,
      close: 22.73,
      acumulatedQtty: 9687200,
      volume: 219289830
    },
    {
      date: '2018-12-26',
      open: 22.63,
      max: 22.64,
      min: 21.95,
      close: 21.98,
      acumulatedQtty: 6412000,
      volume: 142693288
    },
    {
      date: '2018-12-27',
      open: 22.07,
      max: 22.29,
      min: 21.58,
      close: 21.64,
      acumulatedQtty: 5149600,
      volume: 113077844
    },
    {
      date: '2018-12-28',
      open: 21.89,
      max: 22.52,
      min: 21.89,
      close: 22.52,
      acumulatedQtty: 6636000,
      volume: 148983711
    },
    {
      date: '2019-01-02',
      open: 22.5,
      max: 23.2,
      min: 22.33,
      close: 23.2,
      acumulatedQtty: 6754400,
      volume: 155335804
    },
    {
      date: '2019-01-03',
      open: 23.07,
      max: 23.13,
      min: 22.37,
      close: 22.95,
      acumulatedQtty: 6585600,
      volume: 150193947
    },
    {
      date: '2019-01-04',
      open: 22.95,
      max: 22.99,
      min: 22.24,
      close: 22.25,
      acumulatedQtty: 6930400,
      volume: 156015233
    },
    {
      date: '2019-01-07',
      open: 22.2,
      max: 22.76,
      min: 22.11,
      close: 22.59,
      acumulatedQtty: 5293600,
      volume: 119666741
    },
    {
      date: '2019-01-08',
      open: 22.64,
      max: 22.76,
      min: 22.32,
      close: 22.41,
      acumulatedQtty: 4849600,
      volume: 109131856
    },
    {
      date: '2019-01-09',
      open: 22.57,
      max: 22.7,
      min: 22.17,
      close: 22.34,
      acumulatedQtty: 6199200,
      volume: 139152909
    },
    {
      date: '2019-01-10',
      open: 22.32,
      max: 22.59,
      min: 22.17,
      close: 22.55,
      acumulatedQtty: 6108000,
      volume: 137329354
    },
    {
      date: '2019-01-11',
      open: 22.57,
      max: 22.64,
      min: 22.14,
      close: 22.15,
      acumulatedQtty: 9370400,
      volume: 210647368
    },
    {
      date: '2019-01-14',
      open: 22.19,
      max: 22.41,
      min: 21.95,
      close: 22.32,
      acumulatedQtty: 8532000,
      volume: 190563230
    },
    {
      date: '2019-01-15',
      open: 22.45,
      max: 22.56,
      min: 21.9,
      close: 22.07,
      acumulatedQtty: 8225600,
      volume: 183164049
    },
    {
      date: '2019-01-16',
      open: 22.09,
      max: 22.2,
      min: 21.6,
      close: 21.82,
      acumulatedQtty: 8863200,
      volume: 194301042
    },
    {
      date: '2019-01-17',
      open: 21.71,
      max: 21.98,
      min: 21.54,
      close: 21.76,
      acumulatedQtty: 7181600,
      volume: 156242961
    },
    {
      date: '2019-01-18',
      open: 21.89,
      max: 22.05,
      min: 21.64,
      close: 21.73,
      acumulatedQtty: 5624000,
      volume: 122895330
    },
    {
      date: '2019-01-21',
      open: 21.7,
      max: 21.73,
      min: 20.83,
      close: 20.83,
      acumulatedQtty: 10003200,
      volume: 211263483
    },
    {
      date: '2019-01-22',
      open: 20.35,
      max: 20.82,
      min: 20.04,
      close: 20.21,
      acumulatedQtty: 16261600,
      volume: 332911807
    },
    {
      date: '2019-01-23',
      open: 20.45,
      max: 21.22,
      min: 20.3,
      close: 21.15,
      acumulatedQtty: 9562400,
      volume: 197872598
    },
    {
      date: '2019-01-24',
      open: 21.27,
      max: 21.36,
      min: 20.6,
      close: 20.89,
      acumulatedQtty: 9061600,
      volume: 189254105
    },
    {
      date: '2019-01-28',
      open: 20.7,
      max: 21.01,
      min: 20.45,
      close: 20.87,
      acumulatedQtty: 6263200,
      volume: 131009530
    },
    {
      date: '2019-01-29',
      open: 20.96,
      max: 22.41,
      min: 20.95,
      close: 22.21,
      acumulatedQtty: 12793600,
      volume: 281782231
    },
    {
      date: '2019-01-30',
      open: 22.45,
      max: 22.7,
      min: 21.59,
      close: 21.97,
      acumulatedQtty: 10992800,
      volume: 242442427
    },
    {
      date: '2019-01-31',
      open: 22.14,
      max: 22.57,
      min: 21.66,
      close: 22.33,
      acumulatedQtty: 7646400,
      volume: 171482454
    },
    {
      date: '2019-02-01',
      open: 22.32,
      max: 22.51,
      min: 21.96,
      close: 22.3,
      acumulatedQtty: 5166400,
      volume: 114934553
    },
    {
      date: '2019-02-04',
      open: 22.14,
      max: 22.22,
      min: 21.76,
      close: 22.08,
      acumulatedQtty: 4340800,
      volume: 95809102
    },
    {
      date: '2019-02-05',
      open: 22.06,
      max: 22.12,
      min: 21.8,
      close: 21.89,
      acumulatedQtty: 3613600,
      volume: 79432427
    },
    {
      date: '2019-02-06',
      open: 21.76,
      max: 21.76,
      min: 21.01,
      close: 21.16,
      acumulatedQtty: 6461600,
      volume: 138291867
    },
    {
      date: '2019-02-07',
      open: 21.28,
      max: 21.87,
      min: 20.8,
      close: 20.8,
      acumulatedQtty: 9416000,
      volume: 201344314
    },
    {
      date: '2019-02-08',
      open: 20.95,
      max: 21.2,
      min: 20.52,
      close: 21.2,
      acumulatedQtty: 5506400,
      volume: 115414634
    },
    {
      date: '2019-02-11',
      open: 21.2,
      max: 21.2,
      min: 20.52,
      close: 20.62,
      acumulatedQtty: 5428800,
      volume: 112715678
    },
    {
      date: '2019-02-12',
      open: 20.83,
      max: 20.98,
      min: 20.36,
      close: 20.55,
      acumulatedQtty: 8156800,
      volume: 168511841
    },
    {
      date: '2019-02-13',
      open: 20.65,
      max: 20.7,
      min: 19.73,
      close: 20.12,
      acumulatedQtty: 9616000,
      volume: 194924588
    },
    {
      date: '2019-02-14',
      open: 20.27,
      max: 21.32,
      min: 19.96,
      close: 21.29,
      acumulatedQtty: 8436000,
      volume: 174023887
    },
    {
      date: '2019-02-15',
      open: 21.14,
      max: 21.2,
      min: 20.45,
      close: 20.45,
      acumulatedQtty: 7860000,
      volume: 163381112
    },
    {
      date: '2019-02-18',
      open: 20.44,
      max: 21.02,
      min: 20.27,
      close: 21.02,
      acumulatedQtty: 3745600,
      volume: 77617887
    },
    {
      date: '2019-02-19',
      open: 20.95,
      max: 21.45,
      min: 20.9,
      close: 21.16,
      acumulatedQtty: 7568000,
      volume: 161327909
    },
    {
      date: '2019-02-20',
      open: 21.43,
      max: 21.43,
      min: 20.23,
      close: 20.27,
      acumulatedQtty: 12089600,
      volume: 250199123
    },
    {
      date: '2019-02-21',
      open: 20.47,
      max: 20.52,
      min: 19.9,
      close: 20.09,
      acumulatedQtty: 10159200,
      volume: 205386648
    },
    {
      date: '2019-02-22',
      open: 21.2,
      max: 22.59,
      min: 20.69,
      close: 22.19,
      acumulatedQtty: 30509600,
      volume: 665301366
    },
    {
      date: '2019-02-25',
      open: 22.29,
      max: 22.43,
      min: 21.66,
      close: 21.66,
      acumulatedQtty: 10340000,
      volume: 227977986
    },
    {
      date: '2019-02-26',
      open: 21.58,
      max: 22.43,
      min: 21.35,
      close: 22.26,
      acumulatedQtty: 8444800,
      volume: 186359327
    },
    {
      date: '2019-02-27',
      open: 22.26,
      max: 22.39,
      min: 21.8,
      close: 21.95,
      acumulatedQtty: 6376000,
      volume: 141014596
    },
    {
      date: '2019-02-28',
      open: 21.94,
      max: 22.07,
      min: 21.21,
      close: 21.63,
      acumulatedQtty: 8011200,
      volume: 173755916
    },
    {
      date: '2019-03-01',
      open: 21.81,
      max: 22.32,
      min: 21.6,
      close: 21.85,
      acumulatedQtty: 7103200,
      volume: 156661621
    },
    {
      date: '2019-03-06',
      open: 21.84,
      max: 21.87,
      min: 21.34,
      close: 21.4,
      acumulatedQtty: 3880800,
      volume: 83560338
    },
    {
      date: '2019-03-07',
      open: 21.39,
      max: 22.2,
      min: 21.26,
      close: 22.09,
      acumulatedQtty: 9920800,
      volume: 218584239
    },
    {
      date: '2019-03-08',
      open: 21.94,
      max: 22.87,
      min: 21.68,
      close: 22.55,
      acumulatedQtty: 13552000,
      volume: 305841461
    },
    {
      date: '2019-03-11',
      open: 22.54,
      max: 22.93,
      min: 22.23,
      close: 22.77,
      acumulatedQtty: 9706400,
      volume: 219404920
    },
    {
      date: '2019-03-12',
      open: 22.57,
      max: 22.64,
      min: 22.19,
      close: 22.3,
      acumulatedQtty: 5614400,
      volume: 125712086
    },
    {
      date: '2019-03-13',
      open: 22.23,
      max: 22.39,
      min: 21.9,
      close: 22.11,
      acumulatedQtty: 5698400,
      volume: 126423377
    },
    {
      date: '2019-03-14',
      open: 22.07,
      max: 22.27,
      min: 21.89,
      close: 22.01,
      acumulatedQtty: 3347200,
      volume: 73893392
    },
    {
      date: '2019-03-15',
      open: 22.2,
      max: 22.26,
      min: 21.89,
      close: 22.1,
      acumulatedQtty: 6331200,
      volume: 139884911
    },
    {
      date: '2019-03-18',
      open: 22.07,
      max: 22.63,
      min: 21.97,
      close: 22.5,
      acumulatedQtty: 10771200,
      volume: 240584498
    },
    {
      date: '2019-03-19',
      open: 22.42,
      max: 22.8,
      min: 22.36,
      close: 22.54,
      acumulatedQtty: 5387200,
      volume: 122088045
    },
    {
      date: '2019-03-20',
      open: 22.54,
      max: 22.73,
      min: 22.34,
      close: 22.65,
      acumulatedQtty: 5757600,
      volume: 130416079
    },
    {
      date: '2019-03-21',
      open: 22.52,
      max: 22.73,
      min: 22.32,
      close: 22.73,
      acumulatedQtty: 7817600,
      volume: 176427251
    },
    {
      date: '2019-03-22',
      open: 22.43,
      max: 22.68,
      min: 21.54,
      close: 21.61,
      acumulatedQtty: 10982400,
      volume: 241752273
    },
    {
      date: '2019-03-25',
      open: 21.67,
      max: 22,
      min: 21.27,
      close: 21.59,
      acumulatedQtty: 8220000,
      volume: 178273095
    },
    {
      date: '2019-03-26',
      open: 21.81,
      max: 22.02,
      min: 21.67,
      close: 22.02,
      acumulatedQtty: 6088000,
      volume: 133305962
    },
    {
      date: '2019-03-27',
      open: 21.82,
      max: 21.82,
      min: 20.75,
      close: 20.95,
      acumulatedQtty: 12636000,
      volume: 267835024
    },
    {
      date: '2019-03-28',
      open: 21.08,
      max: 21.5,
      min: 20.6,
      close: 21.3,
      acumulatedQtty: 11179200,
      volume: 235876155
    },
    {
      date: '2019-03-29',
      open: 21.48,
      max: 21.69,
      min: 21.32,
      close: 21.56,
      acumulatedQtty: 5718400,
      volume: 123365869
    },
    {
      date: '2019-04-01',
      open: 21.7,
      max: 21.79,
      min: 21.36,
      close: 21.36,
      acumulatedQtty: 4003200,
      volume: 86347121
    },
    {
      date: '2019-04-02',
      open: 21.45,
      max: 21.51,
      min: 20.64,
      close: 20.72,
      acumulatedQtty: 8864000,
      volume: 185834875
    },
    {
      date: '2019-04-03',
      open: 20.95,
      max: 21.55,
      min: 20.8,
      close: 21.09,
      acumulatedQtty: 10100000,
      volume: 214306109
    },
    {
      date: '2019-04-04',
      open: 21.2,
      max: 21.37,
      min: 20.89,
      close: 21.08,
      acumulatedQtty: 5660000,
      volume: 119966412
    },
    {
      date: '2019-04-05',
      open: 21.09,
      max: 21.29,
      min: 20.9,
      close: 21.2,
      acumulatedQtty: 5885600,
      volume: 124493439
    },
    {
      date: '2019-04-08',
      open: 21.16,
      max: 21.23,
      min: 20.59,
      close: 20.79,
      acumulatedQtty: 19244800,
      volume: 404143804
    },
    {
      date: '2019-04-09',
      open: 20.72,
      max: 21,
      min: 20.39,
      close: 20.74,
      acumulatedQtty: 8444000,
      volume: 174929252
    },
    {
      date: '2019-04-10',
      open: 20.83,
      max: 21.04,
      min: 20.64,
      close: 21.04,
      acumulatedQtty: 5064000,
      volume: 105930324
    },
    {
      date: '2019-04-11',
      open: 21,
      max: 21,
      min: 20.45,
      close: 20.7,
      acumulatedQtty: 5146400,
      volume: 106623276
    },
    {
      date: '2019-04-12',
      open: 20.46,
      max: 21.03,
      min: 20.24,
      close: 20.56,
      acumulatedQtty: 6610400,
      volume: 136826308
    },
    {
      date: '2019-04-15',
      open: 20.7,
      max: 20.81,
      min: 20.25,
      close: 20.39,
      acumulatedQtty: 10367200,
      volume: 212756991
    },
    {
      date: '2019-04-16',
      open: 20.4,
      max: 20.72,
      min: 20.2,
      close: 20.34,
      acumulatedQtty: 5866400,
      volume: 119609364
    },
    {
      date: '2019-04-17',
      open: 20.45,
      max: 20.59,
      min: 19.82,
      close: 19.98,
      acumulatedQtty: 9738400,
      volume: 196731190
    },
    {
      date: '2019-04-18',
      open: 20.1,
      max: 21.41,
      min: 20.04,
      close: 21.35,
      acumulatedQtty: 10932000,
      volume: 229362405
    },
    {
      date: '2019-04-22',
      open: 21.24,
      max: 21.27,
      min: 20.76,
      close: 20.9,
      acumulatedQtty: 3457600,
      volume: 72492026
    },
    {
      date: '2019-04-23',
      open: 21,
      max: 21.43,
      min: 21,
      close: 21.38,
      acumulatedQtty: 4150400,
      volume: 88275697
    },
    {
      date: '2019-04-24',
      open: 21.33,
      max: 21.62,
      min: 21.06,
      close: 21.56,
      acumulatedQtty: 6446400,
      volume: 137638476
    },
    {
      date: '2019-04-25',
      open: 21.38,
      max: 21.88,
      min: 21.26,
      close: 21.88,
      acumulatedQtty: 6127200,
      volume: 133268153
    },
    {
      date: '2019-04-26',
      open: 22,
      max: 22.49,
      min: 21.92,
      close: 22.37,
      acumulatedQtty: 9200800,
      volume: 205572801
    },
    {
      date: '2019-04-29',
      open: 22.38,
      max: 22.5,
      min: 22.16,
      close: 22.31,
      acumulatedQtty: 4088000,
      volume: 91432930
    },
    {
      date: '2019-04-30',
      open: 22.95,
      max: 23.91,
      min: 22.88,
      close: 23.91,
      acumulatedQtty: 17032000,
      volume: 399220505
    },
    {
      date: '2019-05-02',
      open: 23.6,
      max: 24.07,
      min: 23.49,
      close: 23.84,
      acumulatedQtty: 10768000,
      volume: 256519945
    },
    {
      date: '2019-05-03',
      open: 23.88,
      max: 24.88,
      min: 23.88,
      close: 24.53,
      acumulatedQtty: 9572000,
      volume: 235086642
    },
    {
      date: '2019-05-06',
      open: 24.38,
      max: 25.12,
      min: 24.25,
      close: 25.03,
      acumulatedQtty: 12184000,
      volume: 302935471
    },
    {
      date: '2019-05-07',
      open: 25.19,
      max: 25.29,
      min: 23.91,
      close: 24.02,
      acumulatedQtty: 13639200,
      volume: 334387054
    },
    {
      date: '2019-05-08',
      open: 24.01,
      max: 24.44,
      min: 24.01,
      close: 24.19,
      acumulatedQtty: 7251200,
      volume: 175514126
    },
    {
      date: '2019-05-09',
      open: 24.11,
      max: 24.11,
      min: 23.24,
      close: 23.24,
      acumulatedQtty: 8584800,
      volume: 201709013
    },
    {
      date: '2019-05-10',
      open: 23.38,
      max: 23.59,
      min: 22.63,
      close: 23.31,
      acumulatedQtty: 7019200,
      volume: 161900517
    },
    {
      date: '2019-05-13',
      open: 23.06,
      max: 23.16,
      min: 22.5,
      close: 22.5,
      acumulatedQtty: 7417600,
      volume: 168652229
    },
    {
      date: '2019-05-14',
      open: 22.88,
      max: 23.12,
      min: 22.25,
      close: 22.28,
      acumulatedQtty: 8059200,
      volume: 181787677
    },
    {
      date: '2019-05-15',
      open: 22.03,
      max: 22.03,
      min: 21.46,
      close: 21.62,
      acumulatedQtty: 11854400,
      volume: 256945955
    },
    {
      date: '2019-05-16',
      open: 21.52,
      max: 21.6,
      min: 20.85,
      close: 20.88,
      acumulatedQtty: 14129600,
      volume: 298526472
    },
    {
      date: '2019-05-17',
      open: 20.63,
      max: 21.6,
      min: 20.63,
      close: 21.1,
      acumulatedQtty: 8448800,
      volume: 179596402
    },
    {
      date: '2019-05-20',
      open: 21.25,
      max: 21.9,
      min: 21.15,
      close: 21.62,
      acumulatedQtty: 8182400,
      volume: 176636649
    },
    {
      date: '2019-05-21',
      open: 21.98,
      max: 22.71,
      min: 21.95,
      close: 22.43,
      acumulatedQtty: 9252800,
      volume: 207467560
    },
    {
      date: '2019-05-22',
      open: 22.62,
      max: 23.02,
      min: 22.25,
      close: 22.53,
      acumulatedQtty: 8796800,
      volume: 199146189
    },
    {
      date: '2019-05-23',
      open: 22.21,
      max: 22.79,
      min: 21.89,
      close: 22.56,
      acumulatedQtty: 8212800,
      volume: 184511388
    },
    {
      date: '2019-05-24',
      open: 22.81,
      max: 22.94,
      min: 22,
      close: 22.11,
      acumulatedQtty: 6352800,
      volume: 141472936
    },
    {
      date: '2019-05-27',
      open: 22.62,
      max: 22.75,
      min: 22.25,
      close: 22.25,
      acumulatedQtty: 3864000,
      volume: 86771147
    },
    {
      date: '2019-05-28',
      open: 22.54,
      max: 23.62,
      min: 22.52,
      close: 23.62,
      acumulatedQtty: 16406400,
      volume: 383006493
    },
    {
      date: '2019-05-29',
      open: 23.79,
      max: 24.43,
      min: 23.39,
      close: 23.66,
      acumulatedQtty: 11266400,
      volume: 270532334
    },
    {
      date: '2019-05-30',
      open: 23.75,
      max: 24.3,
      min: 23.7,
      close: 24.11,
      acumulatedQtty: 7197600,
      volume: 173342749
    },
    {
      date: '2019-05-31',
      open: 24,
      max: 24.5,
      min: 23.96,
      close: 24.5,
      acumulatedQtty: 6731200,
      volume: 163891524
    },
    {
      date: '2019-06-03',
      open: 24.62,
      max: 24.85,
      min: 24.19,
      close: 24.34,
      acumulatedQtty: 6588800,
      volume: 161633861
    },
    {
      date: '2019-06-04',
      open: 24.75,
      max: 24.87,
      min: 24,
      close: 24.32,
      acumulatedQtty: 6428000,
      volume: 156761119
    },
    {
      date: '2019-06-05',
      open: 24.5,
      max: 24.65,
      min: 23.5,
      close: 23.9,
      acumulatedQtty: 10094400,
      volume: 243679337
    },
    {
      date: '2019-06-06',
      open: 24.25,
      max: 24.25,
      min: 23.51,
      close: 23.75,
      acumulatedQtty: 5392800,
      volume: 128518962
    },
    {
      date: '2019-06-07',
      open: 23.85,
      max: 24.81,
      min: 23.82,
      close: 24.81,
      acumulatedQtty: 7796000,
      volume: 190585095
    },
    {
      date: '2019-06-10',
      open: 24.82,
      max: 25.55,
      min: 24.56,
      close: 25.31,
      acumulatedQtty: 9352000,
      volume: 235185952
    },
    {
      date: '2019-06-11',
      open: 25.5,
      max: 26.19,
      min: 25.46,
      close: 25.9,
      acumulatedQtty: 8999200,
      volume: 233023428
    },
    {
      date: '2019-06-12',
      open: 25.75,
      max: 25.77,
      min: 25.12,
      close: 25.39,
      acumulatedQtty: 10597600,
      volume: 269511612
    },
    {
      date: '2019-06-13',
      open: 25.75,
      max: 26.28,
      min: 25.69,
      close: 26.2,
      acumulatedQtty: 10256000,
      volume: 267400075
    },
    {
      date: '2019-06-14',
      open: 26.12,
      max: 26.88,
      min: 25.68,
      close: 26.45,
      acumulatedQtty: 11812800,
      volume: 311842483
    },
    {
      date: '2019-06-17',
      open: 26.51,
      max: 27,
      min: 25.85,
      close: 25.94,
      acumulatedQtty: 10961600,
      volume: 289926699
    },
    {
      date: '2019-06-18',
      open: 26.32,
      max: 26.57,
      min: 25.88,
      close: 26.01,
      acumulatedQtty: 8779200,
      volume: 230431475
    },
    {
      date: '2019-06-19',
      open: 25.88,
      max: 26.38,
      min: 25.63,
      close: 26.25,
      acumulatedQtty: 20766400,
      volume: 538142257
    },
    {
      date: '2019-06-21',
      open: 26.38,
      max: 26.75,
      min: 26.36,
      close: 26.58,
      acumulatedQtty: 9861600,
      volume: 261632074
    },
    {
      date: '2019-06-24',
      open: 26.52,
      max: 26.74,
      min: 26.08,
      close: 26.25,
      acumulatedQtty: 6722400,
      volume: 176882403
    },
    {
      date: '2019-06-25',
      open: 26.12,
      max: 26.37,
      min: 25.81,
      close: 25.81,
      acumulatedQtty: 8291200,
      volume: 215553338
    },
    {
      date: '2019-06-26',
      open: 26,
      max: 26.26,
      min: 25.88,
      close: 26.06,
      acumulatedQtty: 5644800,
      volume: 147055500
    },
    {
      date: '2019-06-27',
      open: 26.04,
      max: 26.19,
      min: 25.68,
      close: 26.08,
      acumulatedQtty: 5900800,
      volume: 153137480
    },
    {
      date: '2019-06-28',
      open: 26.18,
      max: 26.39,
      min: 25.92,
      close: 26.39,
      acumulatedQtty: 8074400,
      volume: 211604832
    },
    {
      date: '2019-07-01',
      open: 26.5,
      max: 26.7,
      min: 26.15,
      close: 26.27,
      acumulatedQtty: 5635200,
      volume: 148446172
    },
    {
      date: '2019-07-02',
      open: 26.34,
      max: 26.5,
      min: 26.12,
      close: 26.56,
      acumulatedQtty: 5667200,
      volume: 149414246
    },
    {
      date: '2019-07-03',
      open: 26.48,
      max: 27.61,
      min: 26.41,
      close: 27.61,
      acumulatedQtty: 10816800,
      volume: 293625285
    },
    {
      date: '2019-07-04',
      open: 27.83,
      max: 28,
      min: 27.64,
      close: 27.64,
      acumulatedQtty: 9025600,
      volume: 250895732
    },
    {
      date: '2019-07-05',
      open: 27.75,
      max: 28.52,
      min: 27.56,
      close: 28.26,
      acumulatedQtty: 7852000,
      volume: 220193958
    },
    {
      date: '2019-07-08',
      open: 28.26,
      max: 28.9,
      min: 28.15,
      close: 28.68,
      acumulatedQtty: 7501600,
      volume: 215256595
    },
    {
      date: '2019-07-10',
      open: 28.91,
      max: 29.49,
      min: 28.91,
      close: 29.19,
      acumulatedQtty: 8860000,
      volume: 259269106
    },
    {
      date: '2019-07-11',
      open: 29.48,
      max: 29.48,
      min: 28.64,
      close: 28.85,
      acumulatedQtty: 8588800,
      volume: 248361083
    },
    {
      date: '2019-07-12',
      open: 29.38,
      max: 30.05,
      min: 29,
      close: 29.01,
      acumulatedQtty: 15270400,
      volume: 452949161
    },
    {
      date: '2019-07-15',
      open: 29.38,
      max: 29.42,
      min: 28.75,
      close: 28.83,
      acumulatedQtty: 7404000,
      volume: 214231207
    },
    {
      date: '2019-07-16',
      open: 28.98,
      max: 29.27,
      min: 28.93,
      close: 29.25,
      acumulatedQtty: 5528000,
      volume: 161150722
    },
    {
      date: '2019-07-17',
      open: 29.64,
      max: 31.37,
      min: 29.64,
      close: 30.55,
      acumulatedQtty: 20838400,
      volume: 641255977
    },
    {
      date: '2019-07-18',
      open: 30.94,
      max: 31.31,
      min: 30.64,
      close: 30.88,
      acumulatedQtty: 9765600,
      volume: 302530074
    },
    {
      date: '2019-07-19',
      open: 31.12,
      max: 31.18,
      min: 29.76,
      close: 29.76,
      acumulatedQtty: 11979200,
      volume: 363752417
    },
    {
      date: '2019-07-22',
      open: 30.12,
      max: 30.93,
      min: 29.88,
      close: 30.92,
      acumulatedQtty: 11854400,
      volume: 362833210
    },
    {
      date: '2019-07-23',
      open: 31.13,
      max: 31.2,
      min: 30.17,
      close: 30.25,
      acumulatedQtty: 8932800,
      volume: 272466007
    },
    {
      date: '2019-07-24',
      open: 30.38,
      max: 31.14,
      min: 30.38,
      close: 30.73,
      acumulatedQtty: 6871200,
      volume: 211763840
    },
    {
      date: '2019-07-25',
      open: 30.96,
      max: 31.03,
      min: 30.27,
      close: 30.56,
      acumulatedQtty: 8836000,
      volume: 270523519
    },
    {
      date: '2019-07-26',
      open: 30.78,
      max: 31.73,
      min: 30.61,
      close: 31.5,
      acumulatedQtty: 9316800,
      volume: 290992392
    },
    {
      date: '2019-07-29',
      open: 31.5,
      max: 33.05,
      min: 31.33,
      close: 32.98,
      acumulatedQtty: 11458400,
      volume: 372149828
    },
    {
      date: '2019-07-30',
      open: 32.98,
      max: 33.93,
      min: 32.88,
      close: 33.07,
      acumulatedQtty: 14011200,
      volume: 468057135
    },
    {
      date: '2019-07-31',
      open: 33.49,
      max: 33.75,
      min: 32.54,
      close: 32.97,
      acumulatedQtty: 12471200,
      volume: 413349690
    },
    {
      date: '2019-08-01',
      open: 33.69,
      max: 34.91,
      min: 33.54,
      close: 34.56,
      acumulatedQtty: 19667200,
      volume: 676026519
    },
    {
      date: '2019-08-02',
      open: 35.08,
      max: 35.6,
      min: 34.69,
      close: 35.44,
      acumulatedQtty: 11278400,
      volume: 396223729
    },
    {
      date: '2019-08-05',
      open: 35.25,
      max: 35.25,
      min: 34.41,
      close: 34.5,
      acumulatedQtty: 14712000,
      volume: 511819950
    },
    {
      date: '2019-08-06',
      open: 35.59,
      max: 37.06,
      min: 35.53,
      close: 36.6,
      acumulatedQtty: 17245600,
      volume: 627321759
    },
    {
      date: '2019-08-07',
      open: 36.9,
      max: 36.9,
      min: 35.24,
      close: 36.31,
      acumulatedQtty: 11467200,
      volume: 414129396
    },
    {
      date: '2019-08-08',
      open: 36.7,
      max: 37.34,
      min: 36.55,
      close: 37.14,
      acumulatedQtty: 9589900,
      volume: 353847694
    },
    {
      date: '2019-08-09',
      open: 37.15,
      max: 38.66,
      min: 37.14,
      close: 37.78,
      acumulatedQtty: 11947800,
      volume: 453091633
    },
    {
      date: '2019-08-12',
      open: 37.77,
      max: 37.77,
      min: 35.97,
      close: 36.42,
      acumulatedQtty: 9427200,
      volume: 351050468
    },
    {
      date: '2019-08-13',
      open: 37.6,
      max: 38.3,
      min: 37.42,
      close: 37.85,
      acumulatedQtty: 15958300,
      volume: 604679599
    },
    {
      date: '2019-08-14',
      open: 37.37,
      max: 38.25,
      min: 36.58,
      close: 36.95,
      acumulatedQtty: 13100400,
      volume: 491038050
    },
    {
      date: '2019-08-15',
      open: 37.5,
      max: 38.03,
      min: 36.11,
      close: 36.31,
      acumulatedQtty: 10010500,
      volume: 368776839
    },
    {
      date: '2019-08-16',
      open: 37.59,
      max: 37.85,
      min: 36.4,
      close: 37.56,
      acumulatedQtty: 8812100,
      volume: 325132144
    },
    {
      date: '2019-08-19',
      open: 38.07,
      max: 38.2,
      min: 37.3,
      close: 37.83,
      acumulatedQtty: 5694500,
      volume: 215667375
    },
    {
      date: '2019-08-20',
      open: 37.65,
      max: 37.68,
      min: 36.21,
      close: 36.53,
      acumulatedQtty: 10230700,
      volume: 374998488
    },
    {
      date: '2019-08-21',
      open: 36.77,
      max: 37.22,
      min: 36.54,
      close: 36.54,
      acumulatedQtty: 6267100,
      volume: 230954411
    },
    {
      date: '2019-08-22',
      open: 36.7,
      max: 36.9,
      min: 34.28,
      close: 34.43,
      acumulatedQtty: 13068800,
      volume: 457316415
    },
    {
      date: '2019-08-23',
      open: 33.65,
      max: 34.98,
      min: 32.98,
      close: 33.78,
      acumulatedQtty: 16515500,
      volume: 560479245
    },
    {
      date: '2019-08-26',
      open: 34.85,
      max: 35,
      min: 33.25,
      close: 33.7,
      acumulatedQtty: 9481100,
      volume: 321841260
    },
    {
      date: '2019-08-27',
      open: 34.26,
      max: 34.93,
      min: 33.82,
      close: 34.21,
      acumulatedQtty: 12921900,
      volume: 443218963
    },
    {
      date: '2019-08-28',
      open: 34.01,
      max: 34.98,
      min: 33.5,
      close: 34.91,
      acumulatedQtty: 10967500,
      volume: 375713731
    },
    {
      date: '2019-08-29',
      open: 35.59,
      max: 37.26,
      min: 35.35,
      close: 37.26,
      acumulatedQtty: 13868500,
      volume: 504566472
    },
    {
      date: '2019-08-30',
      open: 37.6,
      max: 37.93,
      min: 35.91,
      close: 36.29,
      acumulatedQtty: 10959900,
      volume: 401740515
    },
    {
      date: '2019-09-02',
      open: 36.5,
      max: 36.94,
      min: 36.08,
      close: 36.61,
      acumulatedQtty: 6704700,
      volume: 244757387
    },
    {
      date: '2019-09-03',
      open: 36.28,
      max: 37.38,
      min: 35.78,
      close: 35.88,
      acumulatedQtty: 7310000,
      volume: 266667568
    },
    {
      date: '2019-09-04',
      open: 36.66,
      max: 37.2,
      min: 36.35,
      close: 37.2,
      acumulatedQtty: 7775100,
      volume: 286721453
    },
    {
      date: '2019-09-05',
      open: 37.5,
      max: 37.79,
      min: 36.65,
      close: 36.7,
      acumulatedQtty: 6975100,
      volume: 260016006
    },
    {
      date: '2019-09-06',
      open: 36.98,
      max: 37.06,
      min: 35.85,
      close: 35.98,
      acumulatedQtty: 6789900,
      volume: 245496167
    }
  ]
}

class JsonToClass extends Component {
  constructor (props) {
    super(props)

    // console.log(['wat', JSON.parse(localStorage.getItem('menuItems'))]);
    this.state = {
      rows: rows,
      dialogOpen: false,
      imageResults: [],
      smartTextareaModal: false,
      started: false,
      value: 0,
      json: jsonData.graphicalBars,
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
    this.onChangeSmartTextarea = this.onChangeSmartTextarea.bind(this)

    this.handleChangeTab = this.handleChangeTab.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.chooseImage = this.chooseImage.bind(this);

    // this.processContent = this.processContent.bind(this);
    this.importData = this.importData.bind(this)
    this.alaSqlImport = this.alaSqlImport.bind(this)

    // this.onDragOver = this.onDragOver.bind(this);
    // this.handleNLP = this.handleNLP.bind(this);

    this.getImportedData = this.getImportedData.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.handleCloseDialog = this.handleCloseDialog.bind(this)
    this.getType = this.getType.bind(this)
  }

  // onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
  //     // this.setState(state => {
  //     //   const rows = state.rows.slice();
  //     //   for (let i = fromRow; i <= toRow; i++) {
  //     //     rows[i] = { ...rows[i], ...updated };
  //     //   }
  //     // });
  // };

  openDialog () {
    this.setState({ dialogOpen: true })
  }

  handleCloseDialog () {
    this.setState({ dialogOpen: false })
  }

  getImportedData (data) {
    this.setState(data)
  }

  alaSqlImport () {

  }

  importData () {
      
  }

  getType (str) {
    if (typeof str !== 'string') str = str.toString()
    var nan = isNaN(Number(str))
    var isfloat = /^\d*(\.|,)\d*$/
    var commaFloat = /^(\d{0,3}(,)?)+\.\d*$/
    var dotFloat = /^(\d{0,3}(\.)?)+,\d*$/
    var date = /^\d{0,4}(\.|\/)\d{0,4}(\.|\/)\d{0,4}$/
    var email = /^[A-za-z0-9._-]*@[A-za-z0-9_-]*\.[A-Za-z0-9.]*$/
    var phone = /^\+\d{2}\/\d{4}\/\d{6}$/g
    if (!nan) {
      if (parseFloat(str) === parseInt(str)) return 'integer'
      else return 'float'
    } else if (isfloat.test(str) || commaFloat.test(str) || dotFloat.test(str)) return 'float'
    else if (date.test(str)) return 'date'
    else {
      if (email.test(str)) return 'e-mail'
      else if (phone.test(str)) return 'phone'
      else return 'string'
    }
  }

  handleChangeTab (value) {
    this.setState({ value })
  }

  handleChange (json) {
    this.setState({ json: json })
  }

  componentDidMount () {

  }

  onChangeSmartTextarea (event) {
    this.processContent(event.target.value)
  }

  render () {
      
    const scope = {

      Create,
      FormTab,
      SaveButton,
      AutocompleteInput,
      TabbedForm,
      TextInput,
      Toolbar,
      required,
      CodeIcon,
      Card,
      CardContent,
      CardActions,
      Typography,
      Button,
      HomeIcon,
      Datagrid,
      ArrayField,
      SingleFieldList,
      ChipField,
      BooleanField,
      DateField,
      SimpleForm,
      EmailField,
      TextField,
      NumberField,
      ReferenceField,
      ReferenceArrayField,
      UrlField,
      ListView,
      translate
    }

    const { json } = this.state;

    const fields = Object.keys(json[0]);
    const code = `${fields.map(field => `<TextField source="${field}" />`).join('\n')}`
    return (
      <Card>

        <LiveProvider code={code} scope={scope}>
          <Grid container spacing={16}>

            <Grid item xs={12}>

              <Editor
                value={json}
                mode="code"
                allowedModes={['code','text','tree']}
                onChange={this.handleChange}
                height={200}
              />

            </Grid>

            <Grid item xs={4}><LiveEditor /></Grid>
            <Grid item xs={4}><LivePreview /></Grid>
          </Grid>

        </LiveProvider>

      </Card>
    )
  }
}

JsonToClass.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(JsonToClass)
