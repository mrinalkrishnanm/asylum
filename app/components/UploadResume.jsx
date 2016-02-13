import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import userStore from '../stores/userStore.js';
import userAction from '../actions/userAction.js';
import Modal from 'react-modal';
import API from './API.js';

class UploadResume extends React.Component{

  constructor(){
    super()
    this.state = userStore.getState()
  }

  componentWillMount() {
    this.onChange = this.onChange.bind(this)
    userStore.listen(this.onChange)
  }

  componentWillUnmount(){
    userStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state, this.checkResume.bind(this))
  }

  componentDidMount() {
    this.setState({isUploading: false,
                  modalIsOpen: false})
  }

  checkResume() {

    var currentUser = this.state.currentUser
    var id = currentUser.id
    var url = 'users/'+id+'/check_resume'
    var _url = API.url(url)

    var success = (res) => {
      console.log("CHECKED RESUME")
      console.log(res)
      this.setState({sessionUrl: res.urls.view,
      isUploaded: true})
    }

    var failure = (res) => {
      console.log(res)
      console.log("FAILURE")
    }
    
    API.get(_url,success,failure)

  }
  upload(e){
    e.preventDefault();
    var elem = document.getElementsByClassName("hidden-btn")[0];
    elem.click();
    console.log('clicked');

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
    var data = {
      resume: file
    }
    var _this = this
    var resumeName = this.state.currentUser.username + "Resume"

    var url = API.url('internizes/upload_resume')

    var success = (res) => {
      var res = JSON.parse(res.text)
      console.log(res)
      this.setState({sessionUrl: res.urls.view})
      this.setState({isUploaded: true,
                    isUploading: false});
    }

    var failure = (res) => {
      console.log("FAILED")
      this.setState({isUploading: false})
    }

    /* SEND FILE TO SERVER */
    Request.post(url)
    .field('user_id', this.state.currentUser.id)
    .attach('resume', file, file.name)
    .end((err,res) => {
      if(res.status == 200)
        success(res)
      else
        failure(res)
    })

  }

  clickHandler(e) {
    e.preventDefault();
    if(this.state.isUploaded)
      this.viewResume(e);
    else
      this.upload(e);
  }
  render(){

    var { internship } = this.props
    if(!_.isEmpty(internship)) {
      var position = internship.position
      var location = internship.location
      var description = internship.description
    }

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        height                : '600px',
        width                 : '840px',
        transform             : 'translate(-50%, -50%)'
      }
    };

    if(this.state.isUploaded) {
      var display = (<Modal isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles} >
        <iframe src={this.state.sessionUrl} style={{height: '600px', width: '800px'}}>
        </iframe>
      </Modal>
                    )

                    var btnText = "View Resume"
    }
    else
      var btnText = "Upload Resume"
    return(
      <div className="stage-one">
        <div className="internship-apply-box">
          <h2> {position} </h2>
          <small> {location} </small>
          <p> {description} </p>
        </div>

        <input onChange={this.handleFile.bind(this)} type="file" ref="file" className="hidden-btn"/>
        <div className="grey-container">
          <button className="upload-resume" onClick={this.clickHandler.bind(this)}>{btnText}</button>
        </div>
        {display}
      </div>  	
    )
  }
}

module.exports=UploadResume;
