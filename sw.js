import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Cache page navigations (html) with a Network First strategy
registerRoute(
	// Check to see if the request is a navigation to a new page
	({ request }) => request.mode === 'navigate',
	// Use a Network First caching strategy
	new NetworkFirst({
		// Put all cached files in a cache named 'pages'
		cacheName: 'pages',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200],
			}),
		],
	}),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
	// Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
	({ request }) =>
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'worker',
	// Use a Stale While Revalidate caching strategy
	new StaleWhileRevalidate({
		// Put all cached files in a cache named 'assets'
		cacheName: 'static-resources',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200],
			}),
		],
	}),
);

// Cache images with a Cache First strategy
registerRoute(
	// Check to see if the request's destination is style for an image
	({ request }) => request.destination === 'image',
	// Use a Cache First caching strategy
	new CacheFirst({
		// Put all cached files in a cache named 'images'
		cacheName: 'images',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200],
			}),
			// Don't cache more than 50 items, and expire them after 30 days
			new ExpirationPlugin({
				maxEntries: 50,
				maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
			}),
		],
	}),
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
	({ url }) =>
		url.origin === 'http://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
	new StaleWhileRevalidate({
		cacheName: 'fonts',
		plugins: [
			new ExpirationPlugin({
				maxAgeSeconds: 60 * 60 * 24 * 356,
				maxEntries: 30,
			}),
		],
	}),
);

// cache api
registerRoute(
	({ url }) => url.origin.includes('api.themoviedb.org'),
	new NetworkFirst({
		cacheName: 'api-data',
		plugins: [
			new ExpirationPlugin({
				maxAgeSeconds: 360,
				maxEntries: 30,
			}),
		],
	}),
);

// cache api images
registerRoute(
	({ url }) => /\.(jp?g|png)$/i.test(url.pathname),
	new StaleWhileRevalidate({
		cacheName: 'api-image',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 30,
			}),
		],
	}),
);
