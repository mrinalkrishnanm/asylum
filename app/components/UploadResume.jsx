import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import userStore from '../stores/userStore.js';
import userAction from '../actions/userAction.js';
import Modal from 'react-modal';

class UploadResume extends React.Component{

  constructor(){
    super()
    this.state = userStore.getState()
  }

  componentWillMount() {
    userAction.loadCurrent();
    this.onChange = this.onChange.bind(this)
    userStore.listen(this.onChange)
  }

  componentWillUnmount(){
    userStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  componentDidMount() {
    this.setState({isUploading: false,
                  isUploaded: false,
                  modalIsOpen: false})

  }

  upload(e){
    e.preventDefault();
    var elem = document.getElementsByClassName("hidden-btn")[0];
    elem.click();
    console.log('clicked');
  }

  success(){
    this.setState({isUploading:false,
                  isUploaded: true})
                  console.log("Upload success")
  }

  failure(){
    this.setState({isUploading :false})
    console.log("Upload failed")
  }

  viewResume(e) {
    e.preventDefault();
    this.setState({modalIsOpen: true})
  }

  closeResume(e) {
    e.preventDefault()
    this.setState({modalIsOpen:false})
  }

  handleFile(e) {
    e.preventDefault();
    var file = this.refs.file.files[0]
    console.log(file)
    var _this = this
    var resumeName = this.state.currentUser.username + "Resume"

    Request.post("https://upload.view-api.box.com/1/documents")
    .set('Authorization', 'Token smx1yysqp14gk4f9qvh9j5hudrpqt3of')
    .set('Content-type', 'multipart/form-data')
    .set('Content-type', 'application/json')
    .field('name', resumeName)
    .attach('file', file, file.name)
    .end((err,res) => {
      if(res.status == 200)
        _this.success();
      else
        _this.failure();
    })
  }
  
  render(){
    
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-60%, -50%)'
      }
    };

    return(
      <div className="stage-one">
        <input onChange={this.handleFile.bind(this)} type="file" ref="file" className="hidden-btn"/>
        <button className="upload-resume" onClick={this.upload.bind(this)}>Upload Resume </button>
        <button className="view-resume" onClick={this.viewResume.bind(this)}>View Resume </button>
        <Modal isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <h2> Hey I am a modal </h2>
        </Modal>
      </div>  	
    )
  }
}

module.exports=UploadResume;
