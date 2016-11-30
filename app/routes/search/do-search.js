import Ember from 'ember';

export default Ember.Route.extend({
  // query parameters (specified within the link)
  queryParams: {
    // search query string
    q: {
      refreshModel: true
    },
    yearFrom: {
      refreshModel: true
    },
    yearTo: {
      refreshModel: true
    },
    ratingFrom: {
      refreshModel: true
    },
    ratingTo: {
      refreshModel: true
    },
  },

  beforeModel(transition) {
    const ps = transition.queryParams;
    const searchController = this.controllerFor('search');
    const mainController = this.controllerFor('index');
    const searchQ = ps.q;

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

    if (ps.yearFrom === undefined || isNaN(parseInt(ps.yearFrom))) {
      ps.yearFrom = 0;
    }
    if (ps.yearTo === undefined || isNaN(parseInt(ps.yearTo))) {
      ps.yearTo = 5000;
    }
    if (ps.ratingTo === undefined || isNaN(parseFloat(ps.ratingTo))) {
      ps.ratingTo = 10;
    }
    if (ps.ratingFrom === undefined || isNaN(parseFloat(ps.ratingFrom))) {
      ps.ratingFrom = 0;
    }

    const curController = this.controllerFor('search.do-search');
    curController.set('filterParams', {
      'yearFrom': parseInt(ps.yearFrom),
      'yearTo': parseInt(ps.yearTo),
      'ratingFrom': parseFloat(ps.ratingFrom),
      'ratingTo': parseFloat(ps.ratingTo)
    });
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
