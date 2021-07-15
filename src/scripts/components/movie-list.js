import './movie-item';

class MovieList extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.innerHTML = '';
		this._movies.forEach((movie) => {
			const movieItem = document.createElement('movie-item');
			movieItem.setAttribute('class', 'swiper-slide');
			movieItem.movie = movie;
			this.appendChild(movieItem);
		});
	}
}

customElements.define('movie-list', MovieList);
