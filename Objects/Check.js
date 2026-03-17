class Check extends GameObject {
	constructor(config) {
		super(config);
		this.data = config.data;
		this.isCheck = true;
	}

	update() {
		// Kekal kosong
	}

	pijak(state) {
		console.log("--- Menyemak Semua Trigger ---");

		// Pusing (loop) semua objek dalam map
		Object.values(state.map.gameObject).forEach(obj => {
			// Jika objek tersebut adalah Trigger
			if (obj.isTriger) {
				console.log(obj);
			}
		});
	}
}