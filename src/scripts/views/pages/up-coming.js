import Swiper from 'swiper';
import TheMovieDbSource from '../../data/themoviedb-source';
import '../../components/movie-list';
import '../../components/pre-loader';

const UpComing = {
	async render() {
		return `
		<section class="up-coming-movies">
		<pre-loader></pre-loader>
			<h2>Up coming</h2>
			<div class="swiper-container">
			<movie-list class="up-coming-movie-list swiper-wrapper">
			</movie-list>
			</div>
		</section>
        <section class="now-playing-movies">
			<h2>Now playing</h2>
			<div class="swiper-container">
			<movie-list class="now-playing-movie-list swiper-wrapper">
			</movie-list>
			</div>
		</section>
      `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		// UP COMING MOVIES
		const upComingMoviesList = document.querySelector('.up-coming-movie-list');
		const loading = document.querySelector('pre-loader');
		try {
			const upComingMovies = await TheMovieDbSource.upcomingMovies();
			upComingMoviesList.movies = upComingMovies;
			loading.style.display = 'none';
		} catch (error) {
			console.log(error);
			loading.style.display = 'none';
		}

		// NOW PLAYING MOVIES
		const nowPlayingMovies = await TheMovieDbSource.nowPlayingMovies();
		try {
			const nowPlayingMoviesList = document.querySelector('.now-playing-movie-list');
			nowPlayingMoviesList.movies = nowPlayingMovies;
			loading.style.display = 'none';
		} catch (error) {
			console.log(error);
			loading.style.display = 'none';
		}

		// SWIPER
		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper('.swiper-container', {
			// Optional parameters
			slidesPerView: 1,
			spaceBetween: 5,
			loop: true,
			freeMode: true,
			breakpoints: {
				600: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		});
	},
};

export default UpComing;
