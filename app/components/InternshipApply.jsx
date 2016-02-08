"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipStore from '../stores/internshipStore.js';
import ApplyStages from './ApplyStages.jsx';

class InternshipApply extends React.Component{

  constructor () {
    super()
    this.state = internshipStore.getState()
  }

  componentWillMount(){
    this.onChange = this.onChange.bind(this)
    internshipStore.listen(this.onChange)
  }

  componentWillUnmount(){
    internshipStore.unlisten(this.onChange)
  }

  componentDidMount() {
    this.findInternship();
  }
  onChange(state){
    this.setState(state, this.findInternship.bind(this))
  }

  findInternship() {
    console.log("ithu vilich")
    var internships = this.state.internships
    var id = this.props.params.id
    var internship = _.find(internships, {'id': 1});
    this.setState({internship});
  }
  render () {
    console.log(this.state)
    var { internship } = this.state
    if(!_.isEmpty(internship)) {
      var position = internship.position
      var location = internship.location
      var description = internship.description
    }
    return (
      <div>
        <div className="internship-apply-box">
          <h2> {position} </h2>
          <small> {location} </small>
          <p> {description} </p>
        </div>
        <ApplyStages />
      </div>
    );
  }
}

module.exports = InternshipApply;
