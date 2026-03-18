class Reset extends GameObject {
	constructor(config) {
		super(config);
		this.isReset = true;
		this.whoPijakMe = null
	}

	update() {
		// Kekal kosong
	}
	pijak(state, orang) {
		console.log("pijak");
		this.whoPijakMe = orang

	}
}