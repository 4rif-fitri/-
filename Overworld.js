class Overworld{
	constructor(config) {
		this.element = config.element
		this.canvas = this.element.querySelector(".game-canvas")
		this.ctx = this.canvas.getContext("2d")
		this.map = null
	}
	startGameLoop() {
		console.log(this.map.gameObject.hero);


		let step = () => {
			//cler frame sebelumnya
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

			//camra person
			let cameraPerson = this.map.gameObject.hero

			this.map.drawLowerImage(this.ctx, cameraPerson)

			//game object
			Object.values(this.map.gameObject).forEach(object => {
				object.update({
					arrow: this.directionInput.direction,
					map: this.map,
				})
				object.sprite.draw(this.ctx, cameraPerson)
			})

			this.map.drawUpperImage(this.ctx, cameraPerson)

			requestAnimationFrame(() => {
				step()
			})
		}
		step()
	}
	init(){
		this.map = new OverworldMap(window.OverworldMap.DemoRoom)
		this.directionInput = new DirectionInput()
		this.directionInput.init()
		this.startGameLoop()
	}
}