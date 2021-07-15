import './movie-item';

class SearchMovieResults extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.innerHTML = '';
		this._movies.forEach((movie) => {
			const movieItem = document.createElement('movie-item');
			movieItem.setAttribute('class', 'search-movie-item-results');
			movieItem.movie = movie;
			this.appendChild(movieItem);
		});
	}
}

customElements.define('search-movie-results', SearchMovieResults);
