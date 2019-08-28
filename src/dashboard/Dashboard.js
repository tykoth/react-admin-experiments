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
        this.fetchOrders();
        this.fetchReviews();
        this.fetchCustomers();
    }

    async fetchOrders() {
        const { dataProvider } = this.props;
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);
        const { data: recentOrders } = await dataProvider(
            GET_LIST,
            'commands',
            {
                filter: { date_gte: aMonthAgo.toISOString() },
                sort: { field: 'date', order: 'DESC' },
                pagination: { page: 1, perPage: 50 },
            }
        );
        const aggregations = recentOrders
            .filter(order => order.status !== 'cancelled')
            .reduce(
                (stats, order) => {
                    if (order.status !== 'cancelled') {
                        stats.revenue += order.total;
                        stats.nbNewOrders++;
                    }
                    if (order.status === 'ordered') {
                        stats.pendingOrders.push(order);
                    }
                    return stats;
                },
                {
                    revenue: 0,
                    nbNewOrders: 0,
                    pendingOrders: [],
                }
            );
        this.setState({
            revenue: aggregations.revenue.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }),
            nbNewOrders: aggregations.nbNewOrders,
            pendingOrders: aggregations.pendingOrders,
        });
        const { data: customers } = await dataProvider(GET_MANY, 'customers', {
            ids: aggregations.pendingOrders.map(order => order.customer_id),
        });
        this.setState({
            pendingOrdersCustomers: customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}),
        });
    }

    async fetchReviews() {
        const { dataProvider } = this.props;
        const { data: reviews } = await dataProvider(GET_LIST, 'reviews', {
            filter: { status: 'pending' },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 100 },
        });
        const nbPendingReviews = reviews.reduce(nb => ++nb, 0);
        const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
        this.setState({ pendingReviews, nbPendingReviews });
        const { data: customers } = await dataProvider(GET_MANY, 'customers', {
            ids: pendingReviews.map(review => review.customer_id),
        });
        this.setState({
            pendingReviewsCustomers: customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}),
        });
    }

    async fetchCustomers() {
        const { dataProvider } = this.props;
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);
        const { data: newCustomers } = await dataProvider(
            GET_LIST,
            'customers',
            {
                filter: {
                    has_ordered: true,
                    first_seen_gte: aMonthAgo.toISOString(),
                },
                sort: { field: 'first_seen', order: 'DESC' },
                pagination: { page: 1, perPage: 100 },
            }
        );
        this.setState({
            newCustomers,
            nbNewCustomers: newCustomers.reduce(nb => ++nb, 0),
        });
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
