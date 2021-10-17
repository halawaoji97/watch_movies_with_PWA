class FooterApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="brand">
            <a class="logo" href="/">
            <img src="./icons/logo-watch-movies.png" alt="Watch Movie" height="44px";>
            </a>
            <p class="brand-tagline">
                Displaying movies of all genres from
                <a class="tmdb" href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a>.</p>
                
        </div>
        <div class="support">
            <h6>Support</h6>
            <ul>
                <li>
                    <a href="#">Privacy & Policy</a>
                </li>
                <li>
                    <a href="#">Term & Conditions</a>
                </li>
                <li>
                    <a href="#">Support System</a>
                </li>
            </ul>
        </div>
        <div class="our-services">
            <h6>Our Services</h6>
            <ul>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Carrer</a>
                </li>
                <li>
                    <a href="#">Developer</a>
                </li>
            </ul>
        </div>
        <div class="contact">
            <h6>Contact Us</h6>
            <ul>
                <li>
                    <a href="https://www.instagram.com/halawa_oji" target="=_blank"
                    rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="mailto:support@watchmovies.com">
                    <i class="far fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            <p>&copy; Copyright 2021 | by <a href="https://www.instagram.com/halawa_oji" target="=_blank"
                    rel="noopener noreferrer">Halawa Oji</a></p>
        </div>
        `;
	}
}

customElements.define('footer-app', FooterApp);
