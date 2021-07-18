import CONFIG from '../globals/config';

class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this._render();
	}

	_render() {
		this.innerHTML = `
        <a class="card" href=${`/#/detail/${this._movie.id}`}>
        <div class="body-card">
                <img class="lazyload" src="./images/placeholder.webp" data-src=${
									CONFIG.BASE_IMAGE_URL + this._movie.poster_path
								} alt=${this._movie.title}>
        </div>
        <div class="footer-card">
        <h3 class="name-movie">
        <a href=${`/#/detail/${this._movie.id}`}>${this._movie.title}</a>
        </h3>
        <span class="rating">
        <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">

      <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" fill="#FFDD00"/>
      </svg>
        ${this._movie.vote_average}</span>
        <p class="release-date">${this._movie.release_date}</p>
        </div>
        </a>
        `;
	}
}

customElements.define('movie-item', MovieItem);
