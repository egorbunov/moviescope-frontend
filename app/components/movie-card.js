import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    movieInfo(movie) {
      const modal = Ember.$("#movie-info-modal");
      const title = modal.find("#movie-info-title");
      const fragmentInfo = modal.find("#fragment-info");
      const body = modal.find("#movie-info-text");
      title.html("Match info for: <b>" + movie.get('title') + "</b>");
      body.html(movie.get("fragment"));
      if (movie.get("fromReviews") === false) {
        fragmentInfo.html("<i>Fragment from plot</i>");
      } else {
        fragmentInfo.html("<i>Fragment from review</i>");
      }
      modal.modal();
    }
  }
});
