import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './components/App.jsx'; 

var routes = (
  <Route name="app" path="/" handler={ App }>
  </Route>
);

export default routes;
