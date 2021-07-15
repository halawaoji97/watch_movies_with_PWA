class HeroApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this._render();
	}

	get value() {
		return this.querySelector('#search-movies-input').value;
	}

	_render() {
		this.innerHTML = `
        <div class="content-hero">
            <h1>Watch online for free.</h1>
            <p>Take your time to watch your favorite videos 
            <br>
            and enjoy with your family</p>
            <div class="search-app">
                <input type="search" name="search" id="search-movies-input" placeholder="Search">
                <button id="btn-search">Search</button>
            </div>
        </div>
        `;
		this.querySelector('#btn-search').addEventListener('click', this._clickEvent);
	}
}

customElements.define('hero-app', HeroApp);
