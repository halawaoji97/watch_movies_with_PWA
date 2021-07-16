import CONFIG from '../globals/config';

// const formatter = new Intl.NumberFormat('en-US', {
// 	style: 'currency',
// 	currency: 'USD',
// });

const formatterToUSD = (number) => {
	const currency = Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	});
	return currency.format(number);
};
class DetaiMovieItem extends HTMLElement {
	set detailMovies(detailMovies) {
		this._detailMovies = detailMovies;
		this._render();
	}

	_render() {
		this.innerHTML = `
    <div class="body-card">
      <img class="movie-poster" src=${CONFIG.BASE_IMAGE_URL + this._detailMovies.poster_path} alt=${
			this._detailMovies.title
		}/>
    </div>
    <div class="movie-info">
    <div class="movie-vote">
      <ul>
      <li>
      <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">

      <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" fill="#FFDD00"/>
      <title>Rating</title>
      </svg>
      ${this._detailMovies.vote_average}
      </li>

      <li>
      <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">

      <path d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z" fill="#FFDD00"/>
      <title>Vote count</title>
      </svg>
       ${this._detailMovies.vote_count.toLocaleString('id')}
      </li>

      <li>
      <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">

      <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="#FFDD00"/>
      <title>Popularity</title>
      </svg>
       ${this._detailMovies.popularity.toLocaleString('id')}
      </li>

      <li>
      <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">

      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.89 11.1C11.11 10.51 10.25 10.14 10.25 9.2C10.25 8.18 11.36 7.81 12.06 7.81C13.37 7.81 13.85 8.8 13.96 9.15L15.54 8.48C15.39 8.04 14.72 6.57 12.88 6.25V5H11.13V6.26C8.53 6.82 8.51 9.11 8.51 9.22C8.51 11.49 10.76 12.13 11.86 12.53C13.44 13.09 14.14 13.6 14.14 14.56C14.14 15.69 13.09 16.17 12.16 16.17C10.34 16.17 9.82 14.3 9.76 14.08L8.1 14.75C8.73 16.94 10.38 17.53 11.12 17.71V19H12.87V17.76C13.39 17.67 15.89 17.17 15.89 14.54C15.9 13.15 15.29 11.93 12.89 11.1Z" fill="#FFDD00"/>
      <title>Budget</title>
      </svg>
      ${formatterToUSD(this._detailMovies.budget)}
      </li>
      </ul>
    </div>
      <h2 class="movie-title">${this._detailMovies.title}</h2>
      <p class="movie-tagline">${this._detailMovies.tagline}</p>
      
      <p class="movie-overview">${this._detailMovies.overview}</p>
      <div class="description">
            <p class="movie-genre">
              Genre: ${this._detailMovies.genres.map((genre) => ` ${genre.name}`).join(',')}
            </p>
            <p class="movie-runtime">
              Runtime: ${this._detailMovies.runtime} mins
            </p>
            <p class="movie-country">
              Country: ${this._detailMovies.production_countries
								.map((country) => ` ${country.name}`)
								.join(',')}
            </p>
            <p class="movie-release-date">
              Release date : ${this._detailMovies.release_date}
            </p>
            <p class="movie-homepage">
              Homepage: <a href="${this._detailMovies.homepage}" target="_blank">${
			this._detailMovies.homepage
		}</a>
            </p>
        </div>
        <div class="footer-card-detail">
          <div class="playButtonContainer">
            <button class="play" id="play">
            <svg width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.5 16.5L16.5 12L9.5 7.5V16.5Z" fill="#202437"/>
            </svg>
            PLAY
            </button>
          </div>
          <div class="likeButtonContainer" id="likeButtonContainer"></div>
        </div>
    </div>
`;
	}
}
customElements.define('detail-movie-item', DetaiMovieItem);
