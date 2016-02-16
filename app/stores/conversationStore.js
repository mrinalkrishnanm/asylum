import alt from '../alt.js'
import API from '../components/API.js'
import conversationAction from '../actions/conversationAction.js';

class conversationStore {
  constructor() {
    this.conversations = []
    this.bindListeners({
      handleFetchAll: conversationAction.FETCH_ALL,
      handleFetchComplete: conversationAction.FETCH_COMPLETE
    })
  }

  handleFetchAll(res) {
    console.log("initial dispatch")
  }
  handleFetchComplete(res) {
    this.setState({conversations:res})
  }
}

module.exports = alt.createStore(conversationStore,'conversationStore')
