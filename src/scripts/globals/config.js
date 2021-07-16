require('dotenv').config();

const CONFIG = {
	KEY: `${process.env.API_KEY}`,
	BASE_URL: 'https://api.themoviedb.org/3/',
	BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
	DEFAULT_LANGUAGE: 'en-us',
	CACHE_NAME: 'WatchMovies-v1',
	DATABASE_NAME: 'watch-movies-database',
	DATABASE_VERSION: 1,
	OBJECT_STORE_NAME: 'movies',
};

export default CONFIG;
