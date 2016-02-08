import React from 'react';
import Router from 'react-router';
import Request from 'superagent';

class UploadResume extends React.Component{

	constructor(){
		super()
	}
	upload(e){
		e.preventDefault();
		var elem = document.getElementsByClassName("hidden-btn")[0];
		elem.click();
		console.log('clicked');
	}
	render(){
		return(
        	<div className="stage-one">
        	<input type="file" ref="file" className="hidden-btn"/>
        	<button className="upload-resume" onClick={this.upload.bind(this)}>Upload</button>
            </div>  	
			)
	}
}

module.exports=UploadResume;