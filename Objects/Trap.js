class Trap extends GameObject {
	constructor(config) {
		super(config);
		this.data = config.data
		this.isTrap = true;
		this.whoPijakMe = false
	}
	update() {
		// Trigger biasanya tidak bergerak, jadi biarkan kosong atau tambah logik animasi
	}
	pijak(state, orang) {
		this.whoPijakMe = orang 
		console.log("pijak");


		
	}
}