import Ember from 'ember';

export default Ember.Route.extend({
	// query parameters (specified within the link)
	queryParams: {
		searchQuery: {
			refreshModel: true
		}
	},

	isValidated: false,

	model(params) {
		var appController = this.controllerFor('application');
		if (typeof params.searchQuery === 'undefined') {
			params.searchQuery = '';
		}
		if (!appController.get('isSearchSubmitted')) {
			// path was probably opened by hardcoding link with searchQuery parameter
			appController.send('querySubmit', params.searchQuery);
		}
		if (params.searchQuery.length < 4) {
			appController.send('setQueryError', 'Too short query =(');
			this.set('isValidated', false);
			return [];
		}
		this.set('isValidated', true);

		// processing normal scenario
		var data = this.get('store').query('movie', params);
		return data;
	},
});
