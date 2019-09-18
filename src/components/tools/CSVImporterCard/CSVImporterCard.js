

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, FormHelperText, GridList, OutlinedInput, Button, LinearProgress, Icon } from '@material-ui/core';
import CSVToArray from './CSVToArray';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ReactDataGrid from 'react-data-grid';
import WebmGogs from './ezgif.com-gif-to-webm.webm'
















const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

    input: {
        display: 'flex',
        padding: 0,
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
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    modalPaper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    appBar: {
        position: 'relative',
    },
    gridTile: {
        // height:'400px'
    },
    gridRoot: {
        // height:'400px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowX: 'scroll',
        backgroundColor: theme.palette.background.paper,
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
        height: '400px',
        //   marginTop: theme.spacing.unit * 3,
        //   marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            // marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },


    button: {
        margin: theme.spacing.unit,
    },
    inputH: {
        display: 'none',
    },


    cardMedia: {
        position: 'relative',
        opacity: 0.5,
        height: 140,
    },
    cardMediaBlocker: {

        backgroundColor: 'black',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        opacity: '1'
    }
});
class CSVImporterCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageResults: [],
            smartTextareaModal: false,
            started: false,
            value: 0,
            json: [],
            materialTableColumns: [],
            fields: [],
            tableName: null,
            progressOne: 0,
            progressTwo: 0,
            progress: 0,
            activeStep: 0,
            csvImporterCardStep: 0,
            csvImporterCardMaxSteps: 10,
            nlpInput: ''
        };

        this.chooseFile = this.chooseFile.bind(this);

        this.processContent = this.processContent.bind(this);
        // this.importData = this.importData.bind(this);
        // this.openPasteModal = this.openPasteModal.bind(this);
        // this.closePasteModal = this.closePasteModal.bind(this);
        // this.fetchUrl = this.fetchUrl.bind(this);
        // this.checkData = this.checkData.bind(this);
    }

    processContent(content) {

        const result = CSVToArray(content);
        console.log(result);

        let header = result[0].map(i => {
            return { "title": i, "field": i };
        });
        let reactGridHeaders = result[0].map(i => {
            return { "key": i, "name": i, "editable": true };
        });
        const headers = result[0];
        const jsonResult = [];

        let total = result.length

        let p = Promise.resolve();

        p = p.then(() => {
            this.rawData = [];
            this.lastProgress = 0;
        });

        // check for huge data
        result.forEach((row, i) => {
            p = p.then(() => {
                this.resolveRow(row, i);
                var progress = parseInt(((this.rawData.length / total) * 100));
                if (progress % 2 == 0 && progress !== this.lastProgress) {
                    this.lastProgress = progress;
                    this.setState({
                        progressTwo: progress
                    });
                }
            }).then(() => {
                // return new Promise((resolve, reject) => {
                //     setTimeout(resolve,10)
                // }); 
            });
        });

        p = p.then(() => {
            // console.log(jsonResult);
            console.log(['first then', this.rawData.length]);
        }).then(() => {

            // return p;
        }).then(() => {

            // alert("map end");
        });

        p = p.then(() => {

            this.props.onSuccess({
                locked: false,
                progressOne: 0,
                progressTwo: 0,
                total: this.rawData.length,
                progress: 0,
                fields: headers,
                materialTableColumns: header,
                reactGridHeaders: reactGridHeaders,
                json: this.rawData,
                started: true,
                csvImporterCardStep: 3,
                playCogs: false
            });

            this.setState({
                locked: false,
                progressOne: 0,
                progressTwo: 0,
                total: this.rawData.length,
                progress: 0,
                fields: headers,
                materialTableColumns: header,
                reactGridHeaders: reactGridHeaders,
                json: this.rawData,
                started: true,
                csvImporterCardStep: 3,
                playCogs: false
            });

            document.getElementById("video").pause();
        });


    }


    resolveRow(row, i) {
        var output = {};
        var insertid = false;
        if (i === 0) {
            if (!row.includes('id')) {
                this.insertid = true;
                row.unshift('id');
            }
            this.rawHeaders = row;
        } else {
            if (this.insertid == true) {
                row.unshift(i);
            }

            for (var x = 0; x < row.length; x++) {
                if (this.rawHeaders[x]) {
                    output[this.rawHeaders[x]] = row[x];
                }
            }
            this.rawData.push(output);
        }

    }
    setProgress(progress) {

        this.setState({
            progress: progress
        })
    };

    handleNext = () => {
        this.setState(prevState => ({
            csvImporterCardStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            csvImporterCardStep: prevState.csvImporterCardStep - 1,
        }));
    };
    chooseFile(event) {

        // document.getElementById("video").play();
        var fileReader = new FileReader();


        this.setState({
            locked: true,
            progress: 0,
            csvImporterCardStep: 1,
            playCogs: true
        })

        fileReader.onprogress = (data) => {
            if (data.lengthComputable) {
                this.setProgress(parseInt(((data.loaded / data.total) * 100), 10));
                // this.setState({
                //     progressOne:parseInt( ((data.loaded / data.total) * 100), 10 )
                // })
            }
        }
        fileReader.onloadend = (event) => {
            const content = fileReader.result;

            this.setState({
                locked: true,
                size: content.length,
                progressTwo: 0,
                progress: 100,
                csvImporterCardStep: 2
            })

            this.processContent(content);
        }

        fileReader.readAsText(event.target.files[0]);
    }
    render() {

        const { classes, theme, } = this.props;
        const { started, fields, json, materialTableColumns, value, locked,
            progressOne, reactGridHeaders,
            progressTwo, progress, activeStep, smartTextareaModal,
            csvImporterCardStep, csvImporterCardMaxSteps, playCogs, imageSrc, imageResults, nlpInput
        } = this.state;
        return (<Card>
            <CardHeader>CSV Parser</CardHeader>
            <CardMedia
                className={classes.cardMedia}
                title="Upload Processor"
                image={"https://cdn130.picsart.com/241489756028212.png"}
                backgroundColor="blue"
            >


                <video id="video" controls={false} autoPlay={playCogs} loop={true} style={{ width: '100%', height: '100%' }}>
                    <source src={WebmGogs} type="video/webm" />
                </video>
                <div style={{ backgroundColor: 'black', position: 'relative' }}></div>
            </CardMedia>

            <CardContent align="center">

                {csvImporterCardStep === 0 && <div key={0}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Create data by CSV
                    </Typography>
                    <Typography component="p">
                        Send CSV file to start.
                    </Typography>



                    <input
                        // accept=".csv"
                        className={classes.inputH}
                        id="outlined-button-file"
                        multiple
                        type="file"
                        onChange={this.chooseFile}
                    />
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span" className={classes.button}>
                            Upload CSV
                    </Button>
                    </label>

                </div>}


                {csvImporterCardStep === 1 && <div key={1}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Reading your file...
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        ref={elem => this.progressBarElement = elem}
                        value={progress} />
                    {progress}%
                </div>}


                {csvImporterCardStep === 2 && <div key={2}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Checking data
                    </Typography>
                    <LinearProgress
                        color="secondary"
                        variant="determinate"
                        ref={elem => this.progressBarTwo = elem}
                        value={progressTwo} />
                    {progressTwo}%
                </div>}


                {csvImporterCardStep === 3 && <div key={3}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Done!
                    </Typography>

                    <Typography component="p">Filesize:</Typography>
                    <Typography component="p">Columns:{fields.length}</Typography>
                    <Typography component="p">Rows:{json.length}</Typography>


                    {/* <ReactDataGrid
        columns={reactGridHeaders}
        rowGetter={i =>  json[i]}
        rowsCount={json.length}
        
      /> */}

                    <pre style={{
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line',
                        textAlign: 'left'
                    }}>{fields.map(i => `${i}`).join("\n")}</pre>
                </div>}

            </CardContent>
            <CardActions>
                {csvImporterCardStep >= 1 && <MobileStepper
                    variant="progress"
                    steps={2}
                    position="static"
                    activeStep={csvImporterCardStep}
                    className={classes.root}
                    nextButton={
                        <Button size="small"

                            disabled={true}>
                            Next
                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small"
                            disabled={true}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                </Button>
                    }
                />}


            </CardActions>
        </Card>);
    }
}





CSVImporterCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
// export default ;

export default withStyles(styles, { withTheme: true })(CSVImporterCard);
