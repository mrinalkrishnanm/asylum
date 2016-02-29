"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import companyStore from '../stores/companyStore.js';

class ApplicationContainer extends React.Component{

  constructor () {
    super()
    this.state = companyStore.getState()
  }

  componentDidMount() {
    this.findApplication();
  }

  findApplication() {
    var id = this.props.params.id
    var applications = this.state.applications
    console.log(applications)
    var application = _.filter(applications, (a) => {
      return a.id == id
    })[0]

    this.setState({application:application}, this.checkValue.bind(this))

  }

  checkValue() {
    if (_.isEmpty(this.state.application))
      this.context.router.transitionTo('company-internships')
  }

  render () {
    var application = this.state.application
    if(!_.isEmpty(application))
      var display = <h2> {application.id} </h2>
    else
      var display = <h2> Hello </h2>
    return (
      <div>
        {display}
      </div>
    );
  }
}

ApplicationContainer.contextTypes = {
  router: React.PropTypes.func.isRequired
}
module.exports = ApplicationContainer;
