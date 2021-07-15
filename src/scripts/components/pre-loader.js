class PreLoader extends HTMLElement {
	connectedCallback() {
		this._render();
	}

	_render() {
		this.innerHTML = `
        <div class="loader"></div>
        `;
	}
}

customElements.define('pre-loader', PreLoader);
