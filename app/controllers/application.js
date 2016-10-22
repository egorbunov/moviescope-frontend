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
		submit() {
			this.set('showQueryErrorAlert', false);
			// validating input query
			if (this.get('searchQuery').length < 4) {
				this.set('queryErrorMessage', 'Query is too small!');
				this.set('showQueryErrorAlert', true);
				return;
			}
			// changing flag, which means that we are about to show search results, so new 
			// search page view must be shown
			this.set('isSearchSubmitted', true);
			this.transitionToRoute('search', { queryParams: { searchQuery: this.get('searchQuery') }});
		}
	}
});
