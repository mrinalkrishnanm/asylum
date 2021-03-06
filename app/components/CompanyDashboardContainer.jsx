"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { RouteHandler } from 'react-router';
import CompanySidebar from './CompanySidebar.jsx'
import companyStore from '../stores/companyStore.js';
import companyAction from '../actions/companyAction.js';


class CompanyDashboardContainer extends React.Component{

  constructor () {
    super()
    this.state = companyStore.getState();
  }

  componentWillMount() {
    var _this = this
    companyAction.loadCurrent();
    companyAction.loadCreated();
    companyAction.loadApplications();
    companyAction.fetchConversations();
    this.onChange = this.onChange.bind(this)
    companyStore.listen(this.onChange)
  }

  componentWillUnmount() {
    companyStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }
  
  render () {
    if(!_.isEmpty(this.state.currentCompany)) {
      var currentCompany = this.state.currentCompany
      var display = <CompanySidebar user={currentCompany} />
    }
    return (
      <div className="dashboard-wrapper">
        {display}
        <div className="dashboard-container">
          <RouteHandler conversations={this.state.conversations} currentCompany={this.state.currentCompany} applications={this.state.applications} internships={this.state.companyInternships}/>
        </div>
      </div>
    );
  }
}

module.exports = CompanyDashboardContainer;
