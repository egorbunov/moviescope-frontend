import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  searchQuery: ''
});
