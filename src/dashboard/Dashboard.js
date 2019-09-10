import React, { Component } from 'react';
import { GET_LIST, GET_MANY, Responsive, withDataProvider } from 'react-admin';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Welcome from './Welcome';

// import MonthlyRevenue from './MonthlyRevenue';
// import NbNewOrders from './NbNewOrders';
// import PendingOrders from './PendingOrders';
// import PendingReviews from './PendingReviews';
// import NewCustomers from './NewCustomers';
//
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
// import { Icon } from '@material-ui/core';

// const styles = {
//     flex: { display: 'flex' },
//     flexColumn: { display: 'flex', flexDirection: 'column' },
//     leftCol: { flex: 1, marginRight: '1em' },
//     rightCol: { flex: 1, marginLeft: '1em' },
//     singleCol: { marginTop: '2em', marginBottom: '2em' },
// };

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // handle refresh
        if (this.props.version !== prevProps.version) {
            this.fetchData();
        }
    }

    fetchData() {
        // this.fetchOrders();
        // this.fetchReviews();
        // this.fetchCustomers();
    }
    
    render() {
        // const {
        //     nbNewCustomers,
        //     nbNewOrders,
        //     nbPendingReviews,
        //     newCustomers,
        //     pendingOrders,
        //     pendingOrdersCustomers,
        //     pendingReviews,
        //     pendingReviewsCustomers,
        //     revenue,
        // } = this.state;
        // const started = true;
        // const value = 0;

        return (
            <Responsive
                xsmall={
                    <Welcome />
                }
                small={
                    <Welcome />
                }
                medium={
                    <Welcome />
                }
            />
        );
    }
}

const mapStateToProps = state => ({
    version: state.admin.ui.viewVersion,
});

export default compose(
    connect(mapStateToProps),
    withDataProvider
)(Dashboard);
