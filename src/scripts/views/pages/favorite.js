import '../../components/movie-list';
import '../../components/pre-loader';
import FavoriteMovieIdb from '../../data/favorite-movie-idb';

const Favorite = {
	async render() {
		return `
        <section class="favorite-movies">
            <div class="container-favorite-movies">
            <h2>Your favorite movies</h2>
            <pre-loader></pre-loader>
                <movie-list class="favorite-movie-list">
                </movie-list>
            </div>
		</section>
        `;
	},

	async afterRender() {
		const moviesContainer = document.querySelector('movie-list');
		const loading = document.querySelector('pre-loader');
		try {
			const favoriteMovies = await FavoriteMovieIdb.getAllMovies();
			moviesContainer.movies = favoriteMovies;
			loading.style.display = 'none';
		} catch (error) {
			console.log(error);
			loading.style.display = 'none';
		}
	},
};

export default Favorite;
