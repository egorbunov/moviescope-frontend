import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  searchQuery: '',
  wasBtnClicked: false,

  actions: {
    submit() {
      this.send('searchBtnClickedOnIndexPage');
    },

    searchBtnClickedOnIndexPage() {
      console.log("searchBtnClickedOnIndexPage event triggered");
      this.set('wasBtnClicked', true);
      this.transitionToRoute('search.do-search', { queryParams: { q: this.get('searchQuery') }});
      // this.transitionToRoute('search');
    }
  }
});
