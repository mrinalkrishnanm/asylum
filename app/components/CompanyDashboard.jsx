import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class CompanyDashboard extends React.Component{
  constructor() {
    super()
  }

   render() {
    return(
      <div className='--dashboard'>
        <h1> This is my dashboard component </h1>
      </div>
    )
  }
};

CompanyDashboard.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports=CompanyDashboard;

