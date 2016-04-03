import React from 'react';
import Router from 'react-router'
import internshipAction from '../actions/internshipAction.js';
import internshipStore from '../stores/internshipStore.js';
import InternshipBox from './InternshipBox.jsx';
import AppliedInternshipList from './AppliedInternshipList.jsx'

class InternshipList extends React.Component{
  constructor(){
    super()
    this.state = internshipStore.getState();
  }
  componentWillMount(){
    this.onChange = this.onChange.bind(this)
    internshipStore.listen(this.onChange)
  }
  
  componentWillUnmount(){
    internshipStore.unlisten(this.onChange)
  }
  
  onChange(state){
    this.setState(state)
  }

  componentDidMount() {
    this.handleOne();
  }

  handleOne() {
    this.setState({listAll: true})
  }

  handleTwo() {
    this.setState({listAll: false})
  }

  render() {
    var applied = this.state.appliedInternships
    var internships = this.props.internships
    if(this.state.listAll) {
      if(!_.isEmpty(internships)) {
        var display = internships.map((internship) => {
          return <InternshipBox key={internship.id} internship={internship} />
        })
      }
    }
    else {
      var display = <AppliedInternshipList applied={applied} />
    }

    return(
      <div className="internship-list">
        <div className="menu">
          <button onClick={this.handleOne.bind(this)} className={this.state.listAll?'menu-item active':'menu-item'}> Available </button>
          <button onClick={this.handleTwo.bind(this)} className={this.state.listAll?'menu-item':'menu-item active'}> Applied </button>
          </div>
        <hr />
        {display}
      </div>

    )
  }
}
module.exports = InternshipList;
