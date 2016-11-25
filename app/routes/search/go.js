import Ember from 'ember';

export default Ember.Route.extend({
  // query parameters (specified within the link)
  queryParams: {
    // search query string
    q: {
      refreshModel: true
    }
  },

  model(params) {
    if (typeof params.q === 'undefined') {
      params.q = '';
    }
    if (params.q.length < 4) {
      this.controllerFor('search.go').send('newInfoMessage', 'Query is too short!');
      return [];
    }
    const model = this.get('store').query('movie', params);
    if (model.get('length') === 0) {
      this.controllerFor('search.go').send('newInfoMessage', 'Movies not found =/');
    }
    return model;
  }
});
