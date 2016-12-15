import Ember from 'ember';

export default Ember.Controller.extend({
  App: Ember.computed(function() {
    return Ember.getOwner(this).application;
  }),

  movieTypes: [
    {'type_name': 'short'},
    {'type_name': 'tv_series'},
    {'type_name': 'tv_special'},
    {'type_name': 'video_game'},
    {'type_name': 'feature'},
    {'type_name': 'documentary'},
    {'type_name': 'tv_episode'},
    {'type_name': 'video'}
  ],

  genres: [
    {'name': 'Musical'},
    {'name': 'Documentary'},
    {'name': 'Thriller'},
    {'name': 'Comedy'},
    {'name': 'Drama'},
    {'name': 'Fantasy'},
    {'name': 'Horror'},
    {'name': 'Western'},
    {'name': 'Adventure'},
    {'name': 'Sport'},
    {'name': 'Crime'},
    {'name': 'Mystery'},
    {'name': 'Music'},
    {'name': 'Action'},
    {'name': 'Animation'},
    {'name': 'Film-Noir'},
    {'name': 'Game-Show'},
    {'name': 'Talk-Show'},
    {'name': 'Family'},
    {'name': 'News'},
    {'name': 'Biography'},
    {'name': 'Short'},
    {'name': 'War'},
    {'name': 'Adult'},
    {'name': 'History'},
    {'name': 'Reality-TV'},
    {'name': 'Sci-Fi'}
  ],

  // filter parameters
  selectedMovieTypes: null,
  selectedGenres: null,
  yearFrom: 0,
  yearTo:5000,
  imdbRatingFrom: 0,
  imdbRatingTo: 10,

  searchQuery: '',
  actions: {
    searchBtnClicked() {
      this.send('doSearch');
    },

    /**
     * Similar to index controller, but here we already in search route
     */
    doSearch() {
      console.log("do search event triggered, search");
      this.transitionToRoute('search.do-search',
        {
          queryParams:
          {
            q: this.get('searchQuery'),
            y1: this.get('yearFrom'),
            y2: this.get('yearTo'),
            ratingFrom: this.get('imdbRatingFrom'),
            ratingTo: this.get('imdbRatingTo')
          }
        });
    },

    // filters
    imdbRatingRangeChanged(r) {
      this.set('imdbRatingFrom', r[0]);
      this.set('imdbRatingTo', r[1]);
      this.send('doSearch');
    },

    // filters
    yearRangeChanged(r) {
      this.set('yearFrom', r[0]);
      this.set('yearTo', r[1]);
      this.send('doSearch');
    },

  },
});
