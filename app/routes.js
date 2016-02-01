import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Register from './components/Register.jsx';
import App from './components/App.jsx';
import Login from './components/Login.jsx'; 
import Projects from './components/Projects.jsx';
import Dashboard from './components/Dashboard.jsx';
import Newinternship from './components/NewInternship.jsx';


var routes = (
  <Route name="app" path="/" handler={ App }>
  	<Route name="register" path="/register" handler={ Register } />
  	<Route name="login" path="/login" handler={ Login } />
  	<Route name="projects" path="/projects" handler={ Projects } />
  	<Route name="dashboard" path="/dashboard" handler={ Dashboard } />
  	<Route name="newinternship" path="/newinternship" handler={ Newinternship  } />
  </Route>
);

export default routes;
