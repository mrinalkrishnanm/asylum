"use strict";

import React from 'react';
import Router, { Link } from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class CompanyInternshipList extends React.Component{

  constructor () {
    super()
  }

  handleClick(e,id) {
    e.preventDefault();
    console.log(e)
    console.log(id)
  }
  render () {

    var { internships } = this.props
    if(!_.isEmpty(internships)) {
      var display = internships.map((i)=> {
        var number = i.internizes.length
        var id = i.id
        var _this = this
        return ( <div key={i.id} className="company-internship-box">
          <h2> {i.position} </h2>
          <span className="info-box"> {number} </span>
          <small>{i.location}</small> 
          <small> {i.stipend}</small>
          <Link to='internship-table' params={{id: id}}>
            <button className="orange-btn"> 
              View
            </button>
          </Link>
        </div>
               )
      })
    }
    return (
      <div className="company-internship-list">
        <h2>  </h2>
        {display}
      </div>
    );
  }
}

CompanyInternshipList.contextTypes = {
  router: React.PropTypes.func.isRequired
}
module.exports = CompanyInternshipList;
