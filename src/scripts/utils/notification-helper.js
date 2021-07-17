const NotificationHelper = {
	sendNotification({ title, options }) {
		// check availability
		if (!this._checkAvilability()) {
			console.log('Notification not supported in this browser');
			return;
		}

		// check permission
		if (!this._checkPermission()) {
			console.log('User di not yet granted permission');
			this._requestPermission();
			return;
		}

		// show notification
		this._showNotification({ title, options });
	},

	_checkAvilability() {
		return !!('Notification' in window);
	},

	_checkPermission() {
		return Notification.permission === 'granted';
	},

	async _requestPermission() {
		const status = await Notification.requestPermission();

		if (status === 'denied') {
			console.log('Notification Denied');
		}

		if (status === 'default') {
			console.log('Permission closed');
		}
	},

	async _showNotification({ title, options }) {
		const serviceWorkerRegistration = await navigator.serviceWorker.ready;
		serviceWorkerRegistration.showNotification(title, options);
	},
};

export default NotificationHelper;
