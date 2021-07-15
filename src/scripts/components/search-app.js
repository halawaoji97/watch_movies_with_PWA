class SearchApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this._render();
	}

	get value() {
		return this.querySelector('#searchElement').value;
	}

	_render() {
		this.innerHTML = `
		<div id="search-container" class="search-container">
		<input placeholder="Search football club" id="searchElement" type="search">
		<button id="searchButtonElement" type="submit">Search</button>
	</div>
        `;
		this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
	}
}

customElements.define('search-app', SearchApp);
