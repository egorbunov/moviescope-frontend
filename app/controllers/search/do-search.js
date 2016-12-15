import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  message: '',
  messageTitle: '',
  showMessage: false,
  spelledQ: null,
  typosColorQ: null,

  filterParams: null,

  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  filteredModel: function () {
    const model = this.get('model');
    // Now filtering is on server
    // const fp = this.get('filterParams');
    // if (fp != null) {
    //   return model.filter(function(elem) {
    //     const y = elem.get('year');
    //     const r = elem.get('imdbRating');
    //     console.log(r);
    //     console.log(fp);
    //     return (
    //       (y === undefined || (y >= fp['yearFrom'] && y <= fp['yearTo'])) &&
    //       (r === undefined || (r >= fp['ratingFrom'] && r <= fp['ratingTo']))
    //      );
    //   });
    // } else {
    //   return model;
    // }
    return model;
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
    }
  }
});
