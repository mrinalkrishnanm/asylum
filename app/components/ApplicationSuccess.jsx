"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class ApplicationSuccess extends React.Component{

  constructor () {
    super()
  }

  handleClick(e) {
    e.preventDefault();
    this.context.router.transitionTo('internships')
  }
  render () {
    var { internship } = this.props
    return (
      <div className="applied-success">
        <div className="grey-container">
          <div className="success-icon"> </div>
          <h2> You have applied successfully for the position of {internship.position}!</h2>
          <p> Now, the folks at <b>{internship.created_by.name}</b> will review your application and send you a message, soon </p>
          <button onClick={this.handleClick.bind(this)}> Next </button>
        </div>
      </div>
    );
  }
}

ApplicationSuccess.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = ApplicationSuccess;
