import Ember from 'ember';

export default Ember.Controller.extend({
	App: Ember.computed(function() {
		return Ember.getOwner(this).application;
	}),
	searchQuery: '',
	isSearchSubmitted: false,
	showQueryErrorAlert: false,
	queryErrorMessage: '',
	actions: {
		initState() {
			this.set('searchQuery', '');
			this.set('isSearchSubmitted', false);
			this.set('showQueryErrorAlert', false);
		},

		setQueryError(message) {
			this.set('queryErrorMessage', message);
			this.set('showQueryErrorAlert', true);
		},

		// use from other components if query string, for example, submitted throug query param
		querySubmit(query) {
			this.set('searchQuery', query);
			this.set('isSearchSubmitted', true);
		},

		doSearch() {
			// changing flag, which means that we are about to show search results, so new 
			// search page view must be shown
			this.set('isSearchSubmitted', true);
			this.transitionToRoute('search', { queryParams: { searchQuery: this.get('searchQuery') }});
		}
	}
});
