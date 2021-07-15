import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
	static async nowPlayingMovies() {
		const response = await fetch(API_ENDPOINT.NOW_PLAYING);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async upcomingMovies() {
		const response = await fetch(API_ENDPOINT.UP_COMING);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async topRatedMovies() {
		const response = await fetch(API_ENDPOINT.TOP_RATED);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async similarMovies(id) {
		const response = await fetch(API_ENDPOINT.SIMILAR(id));
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async detailMovie(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		return response.json();
	}

	static async searchMovie(keyword) {
		const response = await fetch(`${API_ENDPOINT.SEARCH}&query=${keyword}`);
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async getVideos(id) {
		const response = await fetch(API_ENDPOINT.VIDEOS(id));
		const responseJson = await response.json();
		return responseJson.results;
	}

	static async reviewMovies(id) {
		const response = await fetch(API_ENDPOINT.REVIEW(id));
		const responseJson = await response.json();
		return responseJson.results;
	}
}

export default TheMovieDbSource;
