import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import Sidebar from './Sidebar.jsx';

class NewInternship extends React.Component{
    constructor(){
      super()
  }

  addInternship(e){
      e.preventDefault();
      var position = this.refs.position.value
      var stipend  = this.refs.stipend.value
      var duration = this.refs.duration.value

      var newCompany = {
        position:position,
        stipend: stipend,
        duration: duration
      }

    console.log(newCompany)

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
        <Sidebar/>
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
