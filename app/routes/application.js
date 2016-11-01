import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(transition) {
		// alert("FUCK");
		var appController = this.controllerFor('application');
		appController.set('isSearchSubmitted', false);
		appController.set('searchQuery', '');
	}
});
