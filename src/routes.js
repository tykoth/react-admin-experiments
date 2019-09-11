import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './resources/segments/Segments';
import HostsEditor from './components/tools/HostsEditor';
// import CSVImporterCard from './components/tools/CSVImporterCard'
import MainDashboard from './components/tools/CSVImporterCard'

import DatabaseTool from './components/tools/DatabaseTool'
import JsonToClass from './components/tools/JsonToClass';
import ImageCrawler from './components/tools/ImageCrawler';
import Experiments from './components/tools/Experiments';
// import ScrollableTabsButtonForce from './components/tools/ScrollableTabsButtonForce'
export default [
    
    <Route exact path="/csvimportercard" component={MainDashboard} />,
    
    <Route exact path="/json2class" component={JsonToClass} />,
    
    // <Route exact path="/theme-crawler" component={ImageCrawler} />,
    <Route exact path="/image-crawler" component={ImageCrawler} />,
    <Route exact path="/databases" component={DatabaseTool} />,
    <Route exact path="/experiments" component={Experiments} />,
    
        
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/segments" component={Segments} />,
];
