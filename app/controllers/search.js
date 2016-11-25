import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  searchQuery: '',

  actions: {
    searchBtnClicked() {
      this.send('searchQueryChanged', this.get('searchQuery'));
      this.transitionToRoute('search');
    }
  },
});
