import DS from 'ember-data';

export default DS.Model.extend({
	movieId: DS.attr(), // link to imdb
	title: DS.attr(),
	plot: DS.attr(), // tiny plot
	date: DS.attr(),
	poster: DS.attr(),
	fromReviews: DS.attr(),
	fragment: DS.attr() // piece where match was find
});
