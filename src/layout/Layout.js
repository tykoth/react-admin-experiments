import React from 'react';
import { connect } from 'react-redux';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme, newTheme, blackTheme } from './themes';
import { withStyles } from '@material-ui/core/styles';
// import saturnJpg from './saturn.jpg'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        // backgroundColor: theme.palette.background.default,
        // backgroundColor: 'blue',
        position: 'relative',
    },
    appFrame: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'auto',
        minHeight: '100vh',
    },
    contentWithSidebar: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 2,
        padding:0,
        width:'100%',
        padding: theme.spacing.unit * 3,
        marginTop: '0em',
        // paddingLeft: 5,
        overflow:'auto',
        // maxHeight: '85vh',
        // marginTop:0
    },
});

const CustomSidebar = props => (
    <Sidebar
        {...props}
         style={{
             height:'100vh',
             overflow:'auto'
            //  backgroundColor:"rgba(0,0,0,0.75)"
         }}
    />
);

const CustomLayout = props => (
    <Layout
        {...props}
        style={{
            // backgroundImage:"url(" + saturnJpg + ")",
            height:"100%"
        }}
        appBar={AppBar}
        sidebar={CustomSidebar}
        // menu={Menu}
    />
);

export default connect(
    state => ({
        // theme: state.theme === 'light' ? lightTheme : darkTheme
        theme: state.theme === 'dark' ?  darkTheme : 
                state.theme === 'light' ? lightTheme :
                state.theme == 'black' ? blackTheme :
                newTheme 
            
    }),
    {}
)(withStyles(styles)(CustomLayout));
