import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Register from './components/Register.jsx';
import App from './components/App.jsx';
import Login from './components/Login.jsx'; 
import Projects from './components/Projects.jsx';
import Dashboard from './components/Dashboard.jsx';
import DashboardContainer from './components/DashboardContainer.jsx';
import NewInternship from './components/NewInternship.jsx';
import InternshipContainer from './components/InternshipContainer.jsx';


var routes = (
  <Route name="app" path="/" handler={ App }>
  	<Route name="register" path="/register" handler={ Register } />
  	<Route name="login" path="/login" handler={ Login } />

  	<Route name="dashboard-container" path="/dashboard" handler={ DashboardContainer } >
      <DefaultRoute name="dashboard" handler = {Dashboard} />
      <Route name="internships" path="/internships" handler={ InternshipContainer } >
    	  <Route name="newinternship" path="/internships/new" handler={ NewInternship } />
      </Route>
    </Route>
  </Route>
);

export default routes;
