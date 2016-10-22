import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		searchQuery: {
			refreshModel: true
		}
	},
	model(params) {
		var appController = this.controllerFor('application');

		if (!appController.get('isSearchSubmitted')) {
			// path was probably opened by hardcoding link with searchQuery parameter
			appController.set('searchQuery', params.searchQuery);
			appController.send('submit')
			return []
		}

		// processing normal scenario
		return ["Film 1", "Film 2", "Film 3"];
	}
});
