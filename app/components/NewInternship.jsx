import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import Sidebar from './Sidebar.jsx';
import companyStore from '../stores/companyStore.js';

class NewInternship extends React.Component{
  constructor(){
    super()
    this.state = companyStore.getState();
  }

  componentWillMount() {
    this.onChange = this.onChange.bind(this)
    companyStore.listen(this.onChange)
  }

  componentWillUnmount() {
    companyStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  addInternship(e){

    e.preventDefault();
    var position = this.refs.position.value
    var stipend  = this.refs.stipend.value
    var duration = this.refs.duration.value

    var company = this.state.currentCompany

    var data = {
      position:position,
      stipend: stipend,
      duration: duration,
      created_by_id: company.id
    }

    Request.post("http://localhost:3000/internships")
    .send({internship:newCompany})
    .end((err,res) => {
      console.log(res)
      if(res.status==200)
        alert("Submited");
    })
  }

  render(){
    return(
      <div>
        <h2>Add new internship</h2>
        <input ref="position" placeholder="Position" name="position" />
        <input ref="stipend" placeholder="Stipend" name="stipend" />
        <input ref="duration" placeholder="Duration" name="duration" />
        <input type="submit" value="Submit" onClick={this.AddInternship.bind(this)} />
      </div> 
    )
  }
}


module.exports=NewInternship;
