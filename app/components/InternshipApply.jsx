"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipStore from '../stores/internshipStore.js';
import ApplyStages from './ApplyStages.jsx';
import UploadResume from './UploadResume.jsx';
import ResumeDetails from './ResumeDetails.jsx';

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

  changeStage(stage){
    this.setState({currentStage: stage})
  }
  render () {
    const {internship} = this.state
    if(this.state.currentStage == 1)
      var stageContent = <UploadResume internship={internship} />
    else if(this.state.currentStage == 2)
      var stageContent = <ResumeDetails internship={internship} />
    else
      var stageContent = <h2> Stage Three </h2>
    return (
      <div>
        {stageContent}
        <ApplyStages change={this.changeStage.bind(this)} currentStage={this.state.currentStage} />
      </div>
    );
  }
}

module.exports = InternshipApply;
