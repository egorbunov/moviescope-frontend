import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  searchQuery: '',

  actions: {
    submit() {
      this.send('doSearch');
    },

    searchQueryChanged(newSearchQuery) {
      this.set('searchQuery', newSearchQuery);
    },

    doSearch() {
      this.transitionToRoute('search');
    }
  }
});
