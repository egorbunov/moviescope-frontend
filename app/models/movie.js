import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  movieId: DS.attr('string'),
  title: DS.attr('string'),
  plot: DS.attr('string'), // tiny plot
  releaseDate: DS.attr('string'),
  poster: DS.attr('string'),
  genres: DS.attr(),
  imdbRating: DS.attr(),
  score: DS.attr(),
  year: DS.attr('string'),
  fromReviews: DS.attr('boolean'),
  fragment: DS.attr('string'), // piece where match was find

  cuttedPlot: Ember.computed('plot', function () {
    var plot = this.get('plot');
    const maxLen = 500;
    if (plot.length < maxLen) {
      return plot;
    } else {
      return `${plot.substring(0, maxLen)}...`;
    }
  }),

  notNullPoster: Ember.computed('poster', function () {
    if (this.get('poster') === undefined) {
      return "https://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg";
    }
    return this.get('poster');
  }),

  notNullDate: Ember.computed('date', function () {
    if (this.get('releaseDate') === undefined || this.get('releaseDate').length === 0) {
      return "-";
    }
    return this.get('releaseDate');
  }),

  notNullYear: Ember.computed('year', function () {
    if (this.get('year') === undefined) {
      return "-";
    }
    return this.get('year');
  }),
});
