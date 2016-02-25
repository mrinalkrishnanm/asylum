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
import InternshipApply from './components/InternshipApply.jsx';
import InternshipList from './components/InternshipList.jsx';
import UploadResume from './components/UploadResume.jsx';
import MessageRoute from './components/MessageRoute.jsx';
import MessageList from './components/MessageList.jsx';
import MessageBox from './components/MessageBox.jsx';

import CompanyRegister from './components/CompanyRegister.jsx'
import CompanyLogin from './components/CompanyLogin.jsx';
import CompanyDashboardContainer from './components/CompanyDashboardContainer.jsx';
import CompanyDashboard from './components/CompanyDashboard.jsx';
import CompanyInternshipContainer from './components/CompanyInternshipContainer.jsx';
import CompanyInternshipList from './components/CompanyInternshipList.jsx';
import CompanyInternshipNew from './components/CompanyInternshipNew.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
  	<Route name="register" path="/register" handler={ Register } />
  	<Route name="login" path="/login" handler={ Login } />

  	<Route name="dashboard-container" path="/dashboard" handler={ DashboardContainer } >
      <DefaultRoute name="dashboard" handler = {Dashboard} />
      <Route name="internships" path="/internships" handler={ InternshipContainer } >
        <DefaultRoute handler={ InternshipList } />
        <Route name="apply-intern" path=":id" handler={ InternshipApply } />
      </Route>
      <Route name="messages" path="/messages" handler={ MessageRoute } >
        <DefaultRoute handler={MessageList} />
        <Route name="message" path=":id" handler={MessageBox} />
      </Route>
    </Route>

    <Route name="company-register" path="/company/register" handler={ CompanyRegister } />
    <Route name="company-login" path="/company/login" handler={ CompanyLogin } />
    <Route name="company-dashboard-container" path="/company/dashboard" handler={ CompanyDashboardContainer }>
      <DefaultRoute name="company-dashboard" handler={ CompanyDashboard } />
      <Route name="company-internships" path="/company/internships" handler= { CompanyInternshipContainer } >
        <DefaultRoute handler={ CompanyInternshipList } />
        <Route name="company-new-internship" path="new" handler= { CompanyInternshipNew } />
      </Route>
    </Route>
    
  </Route>
);

export default routes;
