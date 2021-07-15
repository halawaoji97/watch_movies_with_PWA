import DrawerInitiator from '../utils/initial-drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// app => Inisialisasi komponen2 dar app shell ketika web di muat akan di jalankan pertam kali
class App {
	// inisialisasi parameter
	constructor({ button, drawer, content, link }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;
		this._link = link;
		this._initialAppShell();
	}

	// inisialisasi komponen app shell
	_initialAppShell() {
		// initial drawer
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
			link: this._link,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		this._content.innerHTML = await page.render();
		await page.afterRender();
	}
}

export default App;
