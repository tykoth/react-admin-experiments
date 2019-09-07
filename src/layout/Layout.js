import React from 'react';
import { connect } from 'react-redux';
import { Layout, Sidebar, setSidebarVisibility } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme, newTheme, blackTheme } from './themes';
import { withStyles } from '@material-ui/core/styles';
import saturnJpg from './saturn.jpg'
import Scrollbar from 'react-scrollbars-custom';
import { toggleSidebar   } from 'ra-core';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        // backgroundImage:"url(" + saturnJpg + ")",
        // backgroundPosition: "center center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize:" 100% 100%",
        // transition: "background-color 5000ms linear",
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
        
    ><div>

{props.children}

    <Button  onClick={() => toggleSidebar()}>  AAA  </Button>
    </div>
        </Sidebar>
);



const CustomLayout = props => (
    <Layout
        id="CustomLayoutRoot"
        {...props}
        style={{
            backgroundImage:"url(" + saturnJpg + ")",
            height:"100%"
        }}
        appBar={AppBar}
        sidebar={CustomSidebar}
        menu={Menu}
        // open={false}
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
    {toggleSidebar}
)(withStyles(styles)(CustomLayout));

