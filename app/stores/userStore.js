import alt from '../alt.js';
import API from '../components/API.js';
import userAction from '../actions/userAction.js';


class userStore {
  constructor() {
    this.currentUser = undefined;
    this.errorMessage = null;
    this.bindListeners({
      handleLoadCurrent: userAction.LOAD_CURRENT,
      handleLoadCurrentComplete: userAction.LOAD_CURRENT_COMPLETE,
      handleLoadCurrentFailure: userAction.LOAD_CURRENT_FAILURE
    })
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
    this.errorMessage = error;
  }

}

module.exports = alt.createStore(userStore,'userStore')
