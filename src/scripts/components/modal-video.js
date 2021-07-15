class ModalVideo extends HTMLElement {
	set video(video) {
		this._video = video;
		this._render();
	}

	_render() {
		this.innerHTML = `
    <iframe
        title=${this._video.name === null ? 'Noname' : this._video.name}
        width='100%'
        height='100%'
        src=${`https://www.youtube.com/embed/${this._video.key}&append_to_response=videos`}>
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
    </iframe>
        `;
	}
}

customElements.define('modal-video', ModalVideo);
