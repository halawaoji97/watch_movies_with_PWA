import './modal-video';

class VideoList extends HTMLElement {
	set videos(videos) {
		this._videos = videos;
		this.render();
	}

	render() {
		this.innerHTML = '';
		const video = this._videos[0];
		console.log(video);
		const videoItem = document.createElement('modal-video');
		videoItem.video = video;
		this.appendChild(videoItem);
	}
}

customElements.define('video-list', VideoList);
