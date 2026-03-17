class Check extends GameObject {
	constructor(config) {
		super(config);
		this.data = config.data;
		this.isCheck = true;
		this.whoPijakMe = null
	}

	update() {
		// Kekal kosong
	}
	pijak(state, orang) {
		console.log("pijak");
		this.whoPijakMe = orang 
		const triggerAtPos = state.map.checkAllTrigger();
		console.log(triggerAtPos);
	}
}