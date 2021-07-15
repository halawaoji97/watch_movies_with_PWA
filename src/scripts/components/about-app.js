class AboutApp extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="text-about">
            <h2>About Watch Movies</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In natus minus ipsa aut corrupti, alias iure. <br> Explicabo iste facere quis non similique error, officia perspiciatis odit recusandae possimus tempore velit.  <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, itaque!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet consequuntur soluta eum. <br> Ipsum ad ducimus sit rerum numquam quis?Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, quaerat.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Voluptates explicabo esse, sit alias odit temporibus reiciendis consequuntur possimus assumenda ducimus?
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
