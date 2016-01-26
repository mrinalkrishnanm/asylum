import React from 'react';
import Router from 'react-router';
import crypto from 'crypto'

class Gravatar extends React.Component{
   constructor(){
   	super()
   }
    render(){
    	var email = this.props.email 
    	var size = this.props.size
    	var hash = crypto.createHash('md5').update(email).digest("hex")
    	var src ="http://www.gravatar.com/avatar/"+hash+"?s="+size+"&d=retro";
    	return(
    		<div className="gravatar">
    			<img src={src} />
    		</div>
    		)
    }
  }

  module.exports = Gravatar; 
