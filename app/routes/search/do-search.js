import Ember from 'ember';

export default Ember.Route.extend({
  // query parameters (specified within the link)
  queryParams: {
    // search query string
    q: {
      refreshModel: true
    }
  },

  beforeModel(transition) {
    const searchController = this.controllerFor('search');
    const mainController = this.controllerFor('index');
    const searchQ = transition.queryParams.q;

    searchController.set('searchQuery', searchQ);
    mainController.set('searchQuery', searchQ);

    if (searchQ.length < 4) {
      this.controllerFor('search').set('searchErrorMessage', "Too short query");
      this.controllerFor('search').set('showError', true);
      transition.abort();
      this.transitionTo('search');
    } else {
      this.controllerFor('search').set('showError', false);
    }
  },

  model(params) {
    if (typeof params.q === 'undefined') {
      params.q = '';
    }
    const model = this.get('store').query('movie', params);
    if (model.get('length') === 0) {
      this.controllerFor('search.do-search').send('newInfoMessage', 'Movies not found =/');
    }
    return model;
  }
});
