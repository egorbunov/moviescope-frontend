import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		var appController = this.controllerFor('application');
		appController.set('searchQuery', '');
		appController.set('isSearchSubmitted', false);
		appController.set('showQueryErrorAlert', false);
	}
});