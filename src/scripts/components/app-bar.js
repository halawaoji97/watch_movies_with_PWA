class AppBar extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="brand">
        <a class="logo" href="/">
          <img src="./icons/logo-watch-movies.png" alt="Watch Movie" >
        </a>
      </div>
      <div class="menu-button">
        <button id="hamburgerButton" title="menu" aria-label="menu">
        <svg width="36" height="30" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H13V10H0V12ZM0 7H10V5H0V7ZM0 0V2H13V0H0ZM18 9.59L14.42 6L18 2.41L16.59 1L11.59 6L16.59 11L18 9.59Z" fill="#F4F2F5"/>
        </svg>
        </button>
      </div>
      <nav id="navigationDrawer" class="navigation">
        <ul class="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="#/up_coming">Up Coming</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="#/about">About</a></li>
        </ul>
      </nav>
        `;
	}
}
customElements.define('app-bar', AppBar);
