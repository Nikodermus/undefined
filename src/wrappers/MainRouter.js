import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const RouterComp = () => (
  <div>
    <Router>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oops" component={GenericError} />
          <Route component={NotFound} />
        </Switch>
        #w%6*VAvsWr@
        <Footer />
      </ErrorBoundary>
    </Router>
  </div>
);

export default RouterComp;
