import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './resources/segments/Segments';
import HostsEditor from './components/tools/HostsEditor';
// import CSVImporterCard from './components/tools/CSVImporterCard'
import MainDashboard from './components/tools/CSVImporterCard'
// import ScrollableTabsButtonForce from './components/tools/ScrollableTabsButtonForce'
export default [
    
    <Route exact path="/csvimportercard" component={MainDashboard} />,
    
    <Route exact path="/hosts" component={HostsEditor} />,
    
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/segments" component={Segments} />,
];
