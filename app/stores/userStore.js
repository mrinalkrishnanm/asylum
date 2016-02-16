import alt from '../alt.js';
import API from '../components/API.js';
import userAction from '../actions/userAction.js';
import internshipAction from '../actions/internshipAction.js';

class userStore {
  constructor() {
    this.currentUser = undefined;
    this.errorMessage = null;
    this.sessionUrl = "";
    this.isUploaded = false;
    this.bindListeners({
      handleLoadCurrent: userAction.LOAD_CURRENT,
      handleLoadCurrentComplete: userAction.LOAD_CURRENT_COMPLETE,
      handleLoadCurrentFailure: userAction.LOAD_CURRENT_FAILURE,
      handleHasResume: userAction.HAS_RESUME,
      handleIsUploaded: userAction.IS_UPLOADED
    })
  }

  handleIsUploaded(bool) {
    this.setState({isUploaded: bool})
  }
  handleHasResume(res) {
    this.setState({sessionUrl: res.urls.view})
    internshipAction.unlockStage(2)
  }
  handleLoadCurrent() {
    this.currentUser = undefined
  }

  handleLoadCurrentComplete(user) {
    console.log("Complete dispatcher")
    this.setState({currentUser:user})
  }

  handleLoadCurrentFailure(error) {
    console.log("Fail dispatcher")
    this.setState({errorMessage:error})  
  }

}

module.exports = alt.createStore(userStore,'userStore')
