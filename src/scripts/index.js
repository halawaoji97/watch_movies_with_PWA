import 'regenerator-runtime/runtime';
import App from './views/app';
import smoothScroll from './utils/window-scrool';
import 'core-js/stable';
import '../styles/index.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/aside-app';
import './components/footer-app';
import 'swiper/swiper-bundle.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
	button: document.querySelector('#hamburgerButton'),
	drawer: document.querySelector('#navigationDrawer'),
	content: document.querySelector('#content'),
	link: document.querySelector('.nav-list'),
});

window.addEventListener('hashchange', () => {
	smoothScroll();
	app.renderPage();
});
window.addEventListener('load', () => {
	smoothScroll();
	app.renderPage();
	console.log(process.env.API_KEY);
	// swRegister();
});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}
