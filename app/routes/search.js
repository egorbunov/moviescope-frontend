import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      const searchQ = this.controllerFor('index').get('searchQuery');
      this.controllerFor('search').set('searchQuery', searchQ);
      this.transitionTo('search.go', { queryParams: { q: searchQ }});
    },

    searchQueryChanged(newSearchQuery) {
      this.controllerFor('index').send('searchQueryChanged', newSearchQuery);
    },

    yearRangeChanged(l, r) {
      this.controllerFor('search.go').send('yearRangeChanged', l, r);
    }
  }
});
