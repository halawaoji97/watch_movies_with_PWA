class AsideApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="content-aside">
            <h2>Download <span class="watch">Watch</span> <span class="movies">Movies</span> app <br>
                and get the bonus</h2>
            <p class="aside-content">
                This application was built with the PWA feature <br> so that it can be added to the homescreen  <br> and can be accessed even when you are offline.
            </p>
            <div class="app-store">
                <span>
                    <img src="./icons/icon_play_store_android.jpg" alt="Android">
                </span>
                <span>
                    <img src="./icons/icon_play_store_apple.jpg" alt="Apple">
                </span>
            </div>
        </div>
        <div class="image-android">
            <picture>
                <source media="(max-width:900px)" srcset="./images/frame_handphone-medium.jpg">
                <img src="./images/frame_handphone.jpg" alt="frame_handphone">
            </picture>
        </div>
        `;
	}
}

customElements.define('aside-app', AsideApp);
