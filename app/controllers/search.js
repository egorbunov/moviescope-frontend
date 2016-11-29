import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  searchQuery: '',

  actions: {
    searchBtnClicked() {
      this.send('doSearch');
    },

    /**
     * Similar to index controller, but here we already in search route
     */
    doSearch() {
      console.log("do search event triggered, search");
      this.transitionToRoute('search.do-search',
        { queryParams: { q: this.get('searchQuery') }});
    }
  },
});
