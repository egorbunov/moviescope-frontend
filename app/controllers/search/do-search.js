import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  message: '',
  messageTitle: '',
  showMessage: false,

  // filter parameters
  yearFrom: 0,
  yearTo:5000,

  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  filteredModel: function () {
    const model = this.get('model');
    const filtered = model.filter(function(elem) {
      console.log(elem.get('year'));
      console.log(elem.get('imdbRating'));
      console.log(elem.get('genres'));
      console.log(elem.get('score'));


      return true;
    });
    return filtered;
  }.property('model', 'filtered'),

  actions: {
    newInfoMessage(msg) {
      this.set('messageTitle', 'Info');
      this.set('message', msg);
      this.set('showMessage', true);
    },

    newErrorMessage(msg) {
      this.set('messageTitle', 'Error');
      this.set('message', msg);
      this.set('showMessage', true);
    },

    // filters

    yearRangeChanged(l, r) {
      this.set('yearFrom', l);
      this.set('yearTo', r);
      this.get('target.router').refresh();
    }
  }
});
