class AboutApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="text-about">
            <h2>About Watch Movies</h2>
            <p>
            This web application was built based on the API from <a class="tmdb" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a>, </br> with the aim of not being commercial, but for personal use as learning material.  </br> This product uses the TMDB API but is not endorsed or certified by TMDB, </br> for more information please visit <a class="tmdb" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a>.
            </p>

            <h3>About Me</h3>
            <p>
            I am a student who is still active at one of the Universities in Jakarta, </br> namely the University of Bina Sarana Informatics, majoring in information systems. </br> Currently my profession is not a programmer or the like, I'm still learning. </br> Features of this website, can be added to the homescreen, save favorite movies, play video previews and of course can be accessed offline. Thank you!
            </p>
        </div>

        <div class="profil">
            <div class="img-profil">
                <img src="./images/Halawa Oji.jpg" alt="Halawa Oji">
            </div>
            <div class="name">
                <h5>
                    <a href="https://www.instagram.com/halawa_oji" target="_blank" rel="noopener noreferrer">Halawa Oji</a>
                </h5>
                <p class="carrer">Front End Dev</p>
            </div>
        </div>
        `;
	}
}

customElements.define('about-app', AboutApp);
