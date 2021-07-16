import Swiper from 'swiper';
import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import '../../components/detail-movie-item';
import '../../components/movie-list';
import '../../components/video-list';
// import { createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
      <section class="container-detail">
	  	<detail-movie-item></detail-movie-item>
		<video-list class="video-list"></video-list>
	  </section>
	  <section class="similar-movies">
	  	<h2>Similar movies</h2>
			<div class="swiper-container">
				<movie-list class="similar-movie-list swiper-wrapper"></movie-list>
			</div>
	  </section>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const detailMovies = await TheMovieDbSource.detailMovie(url.id);
		const movieContainer = document.querySelector('detail-movie-item');
		movieContainer.detailMovies = detailMovies;
		console.log(detailMovies);

		const similarMovies = await TheMovieDbSource.similarMovies(url.id);
		const similarMoviesList = document.querySelector('.similar-movie-list');
		similarMoviesList.movies = similarMovies;

		// GET VIDEO
		const videoContainer = document.querySelector('video-list');
		const videos = await TheMovieDbSource.getVideos(url.id);
		videoContainer.videos = videos;

		const showVideo = () => {
			videoContainer.classList.toggle('openVideo');
		};

		const main = document.querySelector('#content');
		const play = document.querySelector('#play');
		play.addEventListener('click', (e) => {
			e.stopPropagation();
			showVideo();
		});
		main.addEventListener('click', (e) => {
			e.stopPropagation();
			videoContainer.classList.remove('openVideo');
		});

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			movie: {
				id: detailMovies.id,
				title: detailMovies.title,
				poster_path: detailMovies.poster_path,
				vote_average: detailMovies.vote_average,
				release_date: detailMovies.release_date,
			},
		});

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

export default Detail;
