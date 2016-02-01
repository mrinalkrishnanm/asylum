import Reflux from 'reflux';

var internshipStore = Reflux.createStore({

	listenables: [internshipAction],
	data: {
		internships: []
	},
	init() {
		console.log("Initiated");
	}

	getInitialState() {
		return this.data;
	}
})