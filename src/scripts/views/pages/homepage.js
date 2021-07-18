import Swiper from 'swiper';
import TheMovieDbSource from '../../data/themoviedb-source';
import 'swiper/swiper-bundle.css';
import '../../components/movie-list';
import '../../components/hero-app';
import '../../components/pre-loader';

const Homepage = {
	async render() {
		return `
        <hero-app></hero-app>
		<section class="search-movies">
		<div class="container-search">
		<pre-loader></pre-loader>
			<movie-list class="search-movie-list">
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
		<section class="top-rated-movies">
			<h2>Top rated</h2>
			<div class="swiper-container">
			<movie-list class="top-rated-movie-list swiper-wrapper">
			</movie-list>
			</div>
		</section>
      `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
		// NOW PLAYING MOVIES
		const nowPlayingMoviesList = document.querySelector('.now-playing-movie-list');
		const loading = document.querySelector('pre-loader');
		try {
			const nowPlayingMovies = await TheMovieDbSource.nowPlayingMovies();
			nowPlayingMoviesList.movies = nowPlayingMovies;
			loading.style.display = 'none';
		} catch (error) {
			console.log(error);
			loading.style.display = 'none';
		}

		// TOP MOVIES
		const topRatedMoviesList = document.querySelector('.top-rated-movie-list');
		try {
			const topRatedMovies = await TheMovieDbSource.topRatedMovies();
			topRatedMoviesList.movies = topRatedMovies;
			loading.style.display = 'none';
		} catch (error) {
			console.log(error);
			loading.style.display = 'none';
		}

		// SEARCH MOVIES
		const searchElement = document.querySelector('hero-app');
		const searchMoviesList = document.querySelector('.search-movie-list');
		const onButtonSearchClicked = async () => {
			window.scrollTo({
				top: 550,
				behavior: 'smooth',
			});
			const searchMovies = await TheMovieDbSource.searchMovie(searchElement.value);
			if (searchMovies.length === 0) {
				searchMoviesList.innerHTML += `<p class="not-found">Opsss...! ${searchElement.value} is not found! <br> Please input the right keyword.</p>`;
			} else {
				searchMoviesList.movies = searchMovies;
			}
		};

		searchElement.clickEvent = onButtonSearchClicked;
		// SWIPER
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

export default Homepage;
