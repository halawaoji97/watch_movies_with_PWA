import CONFIG from './config';

const API_ENDPOINT = {
	NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	TOP_RATED: `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	UP_COMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	SEARCH: `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}`,
	DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
	SIMILAR: (id) => `${CONFIG.BASE_URL}movie/${id}/similar?api_key=${CONFIG.KEY}`,
	VIDEOS: (id) => `${CONFIG.BASE_URL}movie/${id}/videos?api_key=${CONFIG.KEY}`,
	REVIEW: (id) => `${CONFIG.BASE_URL}movie/${id}/reviews?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
