import Ember from 'ember';

export default Ember.Route.extend({
  showError: false,
  searchErrorMessage: "",

  actions: {
    didTransition: function () {
      console.log("did transition");
      const mainController = this.controllerFor('index');
      if (mainController.get('wasBtnClicked') === true) {
        const searchQ = mainController.get('searchQuery');
        this.controllerFor('search').set('searchQuery', searchQ);
        mainController.set('wasBtnClicked', false); // shitty mutable state
      }
    },

    searchQueryChanged(newSearchQuery) {
      this.controllerFor('index').send('searchQueryChanged', newSearchQuery);
    },

    yearRangeChanged(l, r) {
      this.controllerFor('search.do-search').send('yearRangeChanged', l, r);
    }
  }
});
