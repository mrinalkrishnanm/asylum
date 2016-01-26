import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import ProjectItem from './ProjectItem.jsx';

class Projects extends React.Component{
	constructor(){
		super()
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		var that = this
		Request.get('http://localhost:3000/projects')
		.end(function(err,res){
			var response = JSON.parse(res.text)
			console.log(response)
			that.setState({projects: response})
		})
	}

	deleteProject(e) {
		e.preventDefault();
		console.log("called")
		var projects = this.state.projects
		projects.pop();

		this.setState({projects:projects})
	}

    render(){
    	var projects = this.state.projects
    	var _this = this
    	var display = projects.map(function(item) {
    		return <ProjectItem deleted={_this.deleteProject.bind(this)} project = {item} />
    	},this)

    	return(
    		<div>
    		<h2> Projects </h2>

    		{display} 
    		</div>

    		)
    }
}

module.exports = Projects;