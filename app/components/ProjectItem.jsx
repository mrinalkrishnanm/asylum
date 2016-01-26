import React from 'react';
import Router from 'react-router';
 
 class ProjectItem extends React.Component{
   constructor() {
   	super()
   }

   deleteProject(e) {
   	e.preventDefault();
   	this.props.deleted(e)
   }

   render() {
   	var project = this.props.project
   	return (
   		<div>
		<h2> {project.name} </h2>
		<button onClick={this.deleteProject.bind(this)}> Delete </button>
   		</div>
   		)

   }
 }

module.exports=ProjectItem;