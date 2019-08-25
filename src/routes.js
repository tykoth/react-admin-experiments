import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './resources/segments/Segments';
import HostsEditor from './components/tools/HostsEditor';
import CSVImporterCard from './components/tools/CSVImporterCard'

export default [
    
    <Route exact path="/csvimportercard" component={CSVImporterCard} />,
    
    <Route exact path="/hosts" component={HostsEditor} />,
    
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/segments" component={Segments} />,
];
