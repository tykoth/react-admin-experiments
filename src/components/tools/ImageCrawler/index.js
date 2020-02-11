import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import db from '../../app/database';
import classnames from 'classnames';
import Fab from '@material-ui/core/Collapse';
import Collapse from '@material-ui/core/Collapse';
import { Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core';


import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
// import NewWindow from 'react-new-window';
import Button from '@material-ui/core/Button';
import Scrollbar from 'react-scrollbars-custom';

const styles = theme => ({
  gridList: {
    
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


const PROXY_APP = "http://osint.dev.br/webapps/php-proxy-app/index.php?q=";

class ImageCrawler extends Component {

  constructor(props) {
    super(props);

    // load galleriesHistory


    const galleriesHistory = JSON.parse(localStorage.getItem('galleriesHistory'));
    var storedHistory = [];
    if(galleriesHistory){
      storedHistory = galleriesHistory.nodes.map((item) => {
        return item;
      })
    }

    // this.props.url = "http://erotica7.com/";

    this.state = {
      mainUrl:this.props.url, 
      url: this.props.url,
      expanded: false,
      images: [],
      janela: null,
      history: storedHistory,
      nodes:[]
    }

    this.createNodes = this.createNodes.bind(this);
  }

  componentDidMount() {
    return this.fetchData(this.props.url);
  }

  fetchData(url) {
    // const url = this.state.url;
    const parsedUrl = url.split('/').slice(2);
    const limit = this.props.limit || 1000;
    // this.setState({
    //   janela:window.open('', 'janela', 'width=1024,height=768')
    // })
    fetch(PROXY_APP  + url)
      .then(data => data.text())
      .then((data) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, "text/html");
        var images = [];

        doc.querySelectorAll('img').forEach((a, b) => {

          var src = a.getAttribute('src') || "";
          var href = a.parentNode.href || "";
          var alt = a.getAttribute('alt') || null;

          // rule 1 - must be a real image
          // rule 2 - must have a link to another page in parent node
          // rule 3 - the link must be the same pattern of website

          var parsedHref = this.unproxyUrl(href).split('/').slice(2);

          // console.log({src,href,alt,parsedHref});
          if (src.match(/\.jpg/gi)
            // && alt !== null 
            && href != "" && !href.match(/out\.php/gi)
          ) {
            if (href.match(/\.jpg/gi)) {
              src = href;

            }

            if (limit > images.length) {
              images.push({
                url: url,
                src: src,
                alt: alt,
                href: this.unproxyUrl(href)
              });
            }
          }
        });

        this.setState({
          images: images
        });


      })
  }

  unproxyUrl(input) {

    var output = input.split('/').slice(-1).join('').replace(/^index\.php\?q\=/gi, '');

    output = decodeURIComponent(output);
    // output = output.split('/').slice(2);
    // console.log([input, output]);
    return output;

  }

  createNodes()
  {

    var node = {}
    var link = {}
    const { history } = this.state;
    


    // return;
    history.map((object) => {
      // console.log(object);
      if(!node[object.src]){
        node[object.src] = {hits:0}
      }
      
      if(!node[object.url]){
        node[object.url] = {hits:0}
      }
      if(!link[object.url + object.src]){
        link[object.url + object.src] = {}
      }
      
        // node['Main'] = Object.assign(node[object.src], {
        //   id:'Main',
        //   title:'Main',
        //   src:object.src,
        //   hits:node[object.src].hits+1,
        //   url:object.url,
        //   href:object.href
        // })
        node[object.src] = Object.assign(node[object.src], {
          id:object.src,
          title:object.alt,
          src:object.src,
          hits:node[object.src].hits+1,
          url:object.url,
          href:object.href
        })

        node[object.url] = Object.assign(node[object.url], {
          id:object.url,
          title:object.alt,
          src:object.src,
          hits:node[object.url].hits+1,
          url:object.url,
          href:object.href
        })

        // link['Main' + object.url] = {source:'Main', target:object.url};
        link[object.url + object.src] = {source:object.url, target:object.src};
      
    });

    var nodes = Object.keys(node).map((index) => {
      return node[index]
    })

    var  links = Object.keys(link).map((index) => {
      return link[index]
    })

    localStorage.setItem('galleriesHistory', JSON.stringify({
      nodes:nodes,
      links:links
    }));

    // console.log();
  }
  showImages() {
    if (this.state.history.length > 0) {

      var history = this.state.history.slice(-9).reverse();
      var image = "";
      for (let x in history) {

        image+= "<img src='" +history[x]+ "' style='width:33.33%;top:0px;left:"+(x*33.33)+"%;right:"+((x*33.33)+33.33)+"%;' />"
        // this.state.janela.document.body.style.backgroundImage = "url("+event.target.src+")"
        // this.state.janela.document.body.style.backgroundSize = 'contain';
        // this.state.janela.document.body.style.backgroundRepeat = 'no-repeat';
        // this.state.janela.document.body.style.backgroundPosition = 'center center';
        // this.state.janela.document.body.styles.background = 'url("' + 

      }
    }
  }
  render() {

    const { classes, theme } = this.props;
    const { images } = this.state;

    const unproxed = function (url) {
      var output = url.href.split('/').slice(-1).join('').replace(/^index\.php\?q\=/gi, '');

      output = decodeURIComponent(output);
      output = output.split('/').slice(2).join();
      return output;
    }

    const untitled = function (title) {
      return title.split(' ').slice(1, 2).join();
    }
    return (
      <div>
        {/* <NewWindow
      name="target"
      title="Target's Title"
      center="screen"
      features={ { left: 0, top: 0, width: 1000, height: 960 } }


    >

            {this.state.history.slice(Math.max(this.state.history.length - 6, 1))
            .reverse()
            .map((src, idx) => (
              <img src={src.src} key={src + idx} style={{
                width: 'auto',
                display:'inline-block',
                margin:'0px',
              // height:'100%',
                padding:'0px',
                zIndex:9999,
                width:'33.3333%'
              }} />
            ))}
    </NewWindow> */}
        <Grid container spacing={0}>
          <Grid item xs={3} sm={3}>
            

          <Scrollbar style={{
            //  position:'fixed',
            //  width:"200px",
             height: '80vh', overflowY:'auto', overflowX: 'hidden'}}>
            <GridList cellHeight={60} className={classes.gridList} cols={3}>
              {images.map((item, idx) => (
                <GridListTile key={idx}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    onClick={(event) => {
                      if (item.href.match(/\.jpg/gi)) {
                        this.fetchData(item.referer); 
                        return;
                      }
                      this.fetchData(item.href);
                    }}

                    onMouseEnter={(event) => {
                      item.time = Date.now();
                      this.setState({ history: [...this.state.history, item] });
                    }}
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

          <Grid item xs={9} sm={9}>
          <div style={ {
            // // position:'fixed',
            // bottom:'200px',
            // // top:'50px',
            // right:'0px',
            // left:'00%',
            // zIndex:9999,
            // display:'block',
            // textAlign:'center',
            // margin:'auto',
            // padding:'auto',
            // overflow:'hidden'
          }}>
            {this.state.history.slice(Math.max(this.state.history.length - 6, 1))
            .reverse()
            .map((src, idx) => (
              <img src={src.src} key={src + idx} style={{
                width: 'auto',
                display:'inline-block',
                margin:'0px',
                height:'100%',
                padding:'0px',
                zIndex:9999
              }} />
            ))}
            <p style={{ content:'', display:'inline-block',width:'100%',height:'0px' }}></p>
          </div>
          </Grid>
        </Grid>


      </div>
    );
  }
}


ImageCrawler.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
// export default ;

export default withStyles(styles, { withTheme: true })(ImageCrawler);