import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	poster: DS.attr(),
	year: DS.attr(),
	plot: DS.attr(), // tiny plot
	imdb: DS.attr() // link to imdb
});
