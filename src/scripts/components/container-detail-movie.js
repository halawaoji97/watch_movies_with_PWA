import './detail-movie-item';

class ContainerDetailMovie extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this._render();
	}

	_render() {
		this.innerHTML = '';
		this._movies.forEach((movie) => {
			const detailMovieItem = document.createElement('detail-movie-item');
			detailMovieItem.movie = movie;
			this.appendChild(movieItem);
		});
	}
}

customElements.define('container-detail-movie', ContainerDetailMovie);
