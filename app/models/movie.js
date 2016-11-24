import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	movieId: DS.attr(),
	title: DS.attr(),
	plot: DS.attr(), // tiny plot
	date: DS.attr(),
	poster: DS.attr(),
	fromReviews: DS.attr(),
	fragment: DS.attr(), // piece where match was find

	cuttedPlot: Ember.computed('plot', function() {
		var plot = this.get('plot');
		const maxLen = 500;
		if (plot.length < maxLen) {
			return plot;
		} else {
			return `${plot.substring(0, maxLen)}...`;
		}
    }),

    notNullPoster: Ember.computed('poster', function() {
    	if (this.get('poster') === undefined) {
    		return "https://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg";
    	}
    	return this.get('poster');
    }),

    notNullDate: Ember.computed('date', function() {
    	if (this.get('date') === undefined || this.get('date').length === 0) {
    		return "-";
    	}
    	return this.get('date');
    })
});
