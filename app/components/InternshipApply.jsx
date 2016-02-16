"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipStore from '../stores/internshipStore.js';
import internshipAction from '../actions/internshipAction.js'
import ApplyStages from './ApplyStages.jsx';
import UploadResume from './UploadResume.jsx';
import ResumeDetails from './ResumeDetails.jsx';
import ApplicationSuccess from './ApplicationSuccess.jsx';


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
    var internships = this.state.internships
    var id = this.props.params.id
    var internship = _.filter(internships, (item) => {
     return item.id == id
    });
    internship = internship[0]
    console.log(internship)
    this.setState({internship});
  }

  changeStage(stage){
    internshipAction.changeState(stage)
  }
  
  

  render () {  
    const { internship } = this.state
    if(this.state.currentStage == 1)
      var stageContent = <UploadResume change={this.changeStage.bind(this)} internship={internship} />
    else if(this.state.currentStage == 2)
      var stageContent = <ResumeDetails change={this.changeStage.bind(this)} internship={internship} />
    else
      var stageContent = <ApplicationSuccess change={this.changeStage.bind(this)} internship={internship} /> 
    return (
      <div>
        {stageContent}
        <ApplyStages change={this.changeStage.bind(this)} currentStage={this.state.currentStage} />
      </div>
    );
  }
}

module.exports = InternshipApply;
