import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import Storage from '@material-ui/icons/Storage';
import { withRouter } from 'react-router-dom';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';
import { toggleSidebar as toggleSidebarAction } from 'ra-core';

import visitors from '../resources/visitors';
import orders from '../resources/orders';
import invoices from '../resources/invoices';
import products from '../resources/products';
// import categories from '../resources/categories';
import reviews from '../resources/reviews';
import SubMenu from './SubMenu';

import BuildIcon from '@material-ui/icons/Build';
import Scrollbar from 'react-scrollbars-custom';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuCatalog: false,
            menuSales: false,
            menuCustomers: false,
            menuTools: false
        }
    }

    static propTypes = {
        onMenuClick: PropTypes.func,
        logout: PropTypes.object,
    };

    handleToggle(menu = false) {
        if (menu) {
            this.setState(state => ({ [menu]: !state[menu] }));
        }
    };

    render() {
        const { resources, onMenuClick, open, logout, translate } = this.props;
        return (<Fragment>
         <Scrollbar style={{
            //  position:'fixed',
            //  width:"200px",
             height: '80vh', overflowY:'auto', overflowX: 'hidden'}}>
                {' '}
                <DashboardMenuItem onClick={onMenuClick} />
                <MenuItemLink
                    to={`/people`}
                    primaryText="People Records"
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                <SubMenu
                    handleToggle={() => this.handleToggle('menuTools')}
                    isOpen={this.state.menuTools}
                    sidebarIsOpen={open}
                    name="Tools"
                    icon={<BuildIcon />}
                >
                <MenuItemLink
                    to={`/image-crawler`}
                    primaryText="image-crawler"
                    leftIcon={<Storage />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/json2class`}
                    primaryText="json2class"
                    leftIcon={<Storage />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/databases`}
                    primaryText="Databases"
                    leftIcon={<Storage />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/csvimportercard`}
                    primaryText={translate(`CSV Importer`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                    <MenuItemLink
                        to={`/hosts`}
                        primaryText={translate(`resources.customers.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<visitors.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/dotenv`}
                        primaryText={translate(`resources.segments.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/themeeditor`}
                        primaryText={translate(`Theme Editor`, {
                            smart_count: 2,
                        })}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <MenuItemLink
                    to={`/hosts`}
                    primaryText={"Hosts"}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/reviews`}
                    primaryText={translate(`resources.reviews.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<reviews.icon />}
                    onClick={onMenuClick}
                />
                <SubMenu
                    handleToggle={() => this.handleToggle('menuSales')}
                    isOpen={this.state.menuSales}
                    sidebarIsOpen={open}
                    name="pos.menu.sales"
                    icon={<orders.icon />}
                >
                    <MenuItemLink
                        to={`/commands`}
                        primaryText={translate(`resources.commands.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<orders.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/invoices`}
                        primaryText={translate(`resources.invoices.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<invoices.icon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuCatalog')}
                    isOpen={this.state.menuCatalog}
                    sidebarIsOpen={open}
                    name="Catalog"
                    icon={<products.icon />}
                >
                    <MenuItemLink
                        to={`/products`}
                        primaryText={translate(`resources.products.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<products.icon />}
                        onClick={onMenuClick}
                    />
                    {/* <MenuItemLink
                        to={`/categories`}
                        primaryText={translate(`resources.categories.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<categories.icon />}
                        onClick={onMenuClick}
                    /> */}
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuCustomer')}
                    isOpen={this.state.menuCustomer}
                    sidebarIsOpen={open}
                    name="pos.menu.customers"
                    icon={<visitors.icon />}
                >
                    <MenuItemLink
                        to={`/customers`}
                        primaryText={translate(`resources.customers.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<visitors.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/segments`}
                        primaryText={translate(`resources.segments.name`, {
                            smart_count: 2,
                        })}
                        leftIcon={<LabelIcon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
                <Responsive
                    xsmall={
                        <MenuItemLink
                            to="/configuration"
                            primaryText={translate('pos.configuration')}
                            leftIcon={<SettingsIcon />}
                            onClick={onMenuClick}
                        />
                    }
                    medium={null}
                />
                <Responsive
                    small={logout}
                    medium={null} // Pass null to render nothing on larger devices
                />
            </Scrollbar>
        </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
    translate
);

export default enhance(Menu);
