import React from 'react'

import {
  ArrayInput,
  AutocompleteInput,
  AutocompleteArrayInput,
  BooleanInput,
  CheckboxGroupInput,
  DateInput,
  DateTimeInput,
  DisabledInput,
  FileInput,
  ImageInput,
  LongTextInput,
  NumberInput,
  RadioButtonGroupInput,
  ReferenceInput,
  ReferenceArrayInput,
  // RichTextInput,
  SelectInput,
  SelectArrayInput,
  SaveButton,
  Title, TabbedForm, SimpleForm, FormTab, TextInput, Toolbar
} from 'react-admin'
import {
  Card, TextInputCard, Grid, CardActions, Button, GridList, GridListTile
} from '@material-ui/core'
// import Slider from '@material-ui/core/Slider';

import { withStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Scrollbar from 'react-scrollbars-custom';


const ExperimentToolbar = props => (
  <Toolbar {...props} >
    <SaveButton
      color="primary"
      label="Run"
      redirect="show"
      submitOnEnter={true}
    />

  </Toolbar>
)

const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  // const StyledRating = withStyles({
  //   iconFilled: {
  //     color: '#ff6d75',
  //   },
  //   iconHover: {
  //     color: '#ff3d47',
  //   },
  // })(Rating);
  
  function getLabelText(value) {
    return `${value} Heart${value !== 1 ? 's' : ''}`;
  }
class Experiments extends React.Component {
  constructor (props) {
    super(props)
        this.state = {
            response: null, images: []
    }
  }

  fetchData (url) {

    return fetch(url).then(response => response.text()).then(response => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(response, "text/html");
        let images = [];

        doc.querySelectorAll('img').forEach((img, b) => {

            let src = img.getAttribute('src') || img.getAttribute('data-src') || "";
            let href = img.parentNode.href || "";
            let alt = img.getAttribute('alt') || null;

            // if (src[0] === "/") {
            //     src = data.url + src;
            // }
            // if (src.substring(0, 4) != "http") {
            //     src = data.url.split('?').slice(0).join('') + src;
            // }


            if (src.match(/\.jpg/gi) && href != ""
                // && !href.match(/out\.php/gi)
            ) {
                images.push({ src, href, alt });
            }
        });
        this.setState({ response, images })
    })
  }

  render () {
    const { response, images } = this.state;
        return (

      <Card>
        <Title title="Experiments" />
        <Grid container spacing={16}>

          <Grid item xs={12}>
            
            <SimpleForm
              toolbar={<ExperimentToolbar />}
              save={(data) => {
                // alert(JSON.stringify(data));

                if (data.url && data.url != '') {
                    this.fetchData(data.url, 0);
                }
                return true
                            }}
              // toolbar={<div />}
            >
              <TextInput fullWidth source="url" />

              {/* <Typography component="legend">Custom icon and color</Typography>
              <StyledRating
                name="customized-color"
                value={2}
                getLabelText={getLabelText}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
              /> */}
            </SimpleForm>

          </Grid>

          <Grid item xs={6}>
                        <Scrollbar style={{
                            //  position:'fixed',
                            //  width:"200px",
                            height: '80vh', overflowY: 'auto', overflowX: 'hidden'
                        }}>
                            <GridList cellHeight={200} cols={3}>
                                {images.map((item, idx) => (
                                    <GridListTile key={idx}>
                                        {/* <a href={item.href}> */}
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            onClick={(event) => {
                                            if (item.href.match(/\.jpg/gi)) {
                                                // this.fetchData(item.referer);
                                                return false;
                                            }
                                            this.fetchData(item.href, 1);
                                        }}

                                        // onMouseEnter={(event) => {
                                        //     item.time = Date.now();
                                        //     this.setState({ history: [...this.state.history, item] });
                                        // }}
                                        // onDoubleClickCapture={(event) => { 
                                        //   // alert('ok');
                                        //   // console.log(['abrira', item.refere])
                                        //   // this.setState({
                                        //   //   url:this.unproxyUrl(item.href)
                                        //   // });  
                                        //   // var url = this.unproxyUrl(item.href);
                                        //   // if(url.match(/\.jpg/gi)){

                                        //   //   return;
                                        //   // }
                                        // //                  
                                        // }}
                                        />
                                        {/* </a> */}
                                        {/* <GridListTileBar
                cols={1}
                title={untitled(item.alt)}
                titlePosition="top"
                subtitle={<span>{unproxed(item)}</span>}
                // actionIcon={

                //   <Tooltip title="Add" placement="top-start">
                //     <IconButton className={classes.icon}>
                //       <StarBorderIcon />
                //     </IconButton>
                //   </Tooltip>
                // }
                actionPosition="left"
              /> */}
                                    </GridListTile>
                                ))}
                            </GridList>
                        </Scrollbar>

          </Grid>


          <Grid item xs={3}>
              
          </Grid>
          <Grid item xs={3}>
            <TabbedForm>
              <FormTab>

      
                {/* <ArrayInput source="Field_ArrayInput" /> */}
                <AutocompleteInput source="Field_AutocompleteInput" />
                <AutocompleteArrayInput source="Field_AutocompleteArrayInput" />
                <BooleanInput source="Field_BooleanInput" />
                <CheckboxGroupInput source="Field_CheckboxGroupInput" />
                <DateInput source="Field_DateInput" />
                <DateTimeInput source="Field_DateTimeInput" />
                <DisabledInput source="Field_DisabledInput" />
                <FileInput source="Field_FileInput" />
                <ImageInput source="Field_ImageInput" />
                <LongTextInput source="Field_LongTextInput" />
                <NumberInput source="Field_NumberInput" />
                <RadioButtonGroupInput source="Field_RadioButtonGroupInput" />
                {/* <ReferenceInput source="Field_ReferenceInput" /> */}
                {/* <ReferenceArrayInput source="Field_ReferenceArrayInput" /> */}
                {/* <RichTextInput source="Field_RichTextInput" /> */}
                <SelectInput source="Field_SelectInput" />
                <SelectArrayInput source="Field_SelectArrayInput" />
                <TextInput source="Field_TextInput" />
              </FormTab>
            </TabbedForm>
          </Grid>
        </Grid>

      </Card>
    )
    }
}

export default Experiments
