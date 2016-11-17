import Ember from 'ember';

export default Ember.Route.extend({
	// query parameters (specified within the link)
	queryParams: {
		// search query string
		q: {
			refreshModel: true
		}
	},

	isValidated: false,

	model(params) {
		var vanya = this.controllerFor('application');
		if (typeof params.q === 'undefined') {
			params.q = '';
		}
		if (!vanya.get('isSearchSubmitted')) {
			// path was probably opened by hardcoding link with q parameter
			vanya.send('querySubmit', params.q);
		}
		if (params.q.length < 4) {
			vanya.send('setQueryError', 'Too short query =(');
			this.set('isValidated', false);
			return [];
		}
		this.set('isValidated', true);

		// processing normal scenario
		var data = this.get('store').query('movie', params);
		return data;
	},
});
