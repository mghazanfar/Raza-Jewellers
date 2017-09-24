import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
<Router>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/widgets" component={Widgets} />
  </Router>
