import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  // query parameters (specified within the link)
  queryParams: {
    // search query string
    q: {
      refreshModel: true
    },
    y1: {
      refreshModel: true
    },
    y2: {
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

    // console.log(this.get('ajax'))
    //   .request('http://speller.yandex.net/services/spellservice.json/checkText?text=' +
    //     searchQ +
    //     '&lang=en');

    if (searchQ.length < 4) {
      searchController.set('searchErrorMessage', "Too short query");
      searchController.set('showError', true);
      transition.abort();
      this.transitionTo('search');
    } else {
      searchController.set('showError', false);
    }

    const curController = this.controllerFor('search.do-search');


    Ember.$.when(Ember.$.ajax({
      url: 'http://speller.yandex.net/services/spellservice.json/checkText?text=' +
      searchQ +
      '&lang=en'
    })).then(function (data, status, jqXHR) {
      var typos = JSON.parse(jqXHR.responseText);

      function maybeName(t) {
        return t.word[0] !== t.word[0].toUpperCase();
      }

      typos = typos.filter(maybeName);

      var newQuery = "";
      var highlighted = "";
      var noSuggestion = false;
      if (typos.length === 0) {
        searchController.set('spelledQ', null);
        curController.set('spelledQ', null);
        curController.set('typosColorQ', null);
        return;
      }

      var prev = {pos: 0, len: 0}
      for (let t of typos) {
        highlighted = highlighted + searchQ.substring(prev.pos + prev.len, t.pos);
        newQuery = newQuery + searchQ.substring(prev.pos + prev.len, t.pos);
        highlighted += '<span style="color: red; ">' + searchQ.substring(t.pos, t.pos + t.len) + '</span>';

        if (t.s.length === 0) {
          noSuggestion = true;
        } else {
          newQuery += t.s[0];
        }

        console.log(highlighted);
        console.log(newQuery);
        console.log(t);
        prev = t;
      }

      if (!noSuggestion) {
        curController.set('spelledQ', newQuery);
        searchController.set('spelledQ', newQuery);
      }
      curController.set('typosColorQ', highlighted);
    });

    if (ps.y1 === undefined || isNaN(parseInt(ps.y1))) {
      ps.y1 = 0;
    }
    if (ps.y2 === undefined || isNaN(parseInt(ps.y2))) {
      ps.y2 = 5000;
    }
    if (ps.ratingTo === undefined || isNaN(parseFloat(ps.ratingTo))) {
      ps.ratingTo = 10;
    }
    if (ps.ratingFrom === undefined || isNaN(parseFloat(ps.ratingFrom))) {
      ps.ratingFrom = 0;
    }

    curController.set('filterParams', {
      'yearFrom': parseInt(ps.y1),
      'yearTo': parseInt(ps.y2),
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
  },

  actions: {
    spelledQSearch() {
      const searchController = this.controllerFor('search');
      // const curController =
      this.transitionTo('search');
      searchController.send('doSpelledSearch');
    }
  }
});
