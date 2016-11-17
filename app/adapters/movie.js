import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
	host: 'http://23.251.136.39:5242',

	urlForQuery(query, modelName) {
		return this.get('host').concat("/s");
	}
});

// export default DS.Adapter.extend({
// 	query(store, type, query) {
// 		function shuffle(array) {
// 		    let counter = array.length;
// 		    while (counter > 0) {
// 		        let index = Math.floor(Math.random() * counter);
// 		        counter--;
// 		        let temp = array[counter];
// 		        array[counter] = array[index];
// 		        array[index] = temp;
// 		    }
// 		    return array;
// 		}
		
// 		return shuffle([
// 			{
// 				id: 0,
// 				title: 'Harry Potter and The Goblet of Fire',
// 				poster: 'https://i.jeded.com/i/harry-potter-and-the-goblet-of-fire.11171.jpg',
// 				year: 2005,
// 				plot: "Guy waving a stick, but it won't save the twillight vampire",
// 				imdb: 'http://www.imdb.com/title/tt0330373/'
// 			},
// 			{
// 				id: 1,
// 				title: 'Psycho',
// 				poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
// 				year: 1960,
// 				plot: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
// 				imdb: 'http://www.imdb.com/title/tt0054215'
// 			},
// 			{
// 				id: 2,
// 				title: 'The Shawshank Redemption',
// 				poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
// 				year: 1994,
// 				plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
// 				imdb: 'http://www.imdb.com/title/tt0111161'
// 			},
// 			{
// 				id: 4,
// 				title: 'Pulp Fiction',
// 				poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
// 				year: 1994,
// 				plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
// 				imdb: 'http://www.imdb.com/title/tt0110912'
// 			}
// 		]);
// 	}
// });
