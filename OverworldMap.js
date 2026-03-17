class OverworldMap{
	constructor(config) {
		this.gameObject = config.gameObject
		this.walls = config.walls || {}
		this.lowerImage = new Image()
		this.lowerImage.src = config.lowerSrc

		this.upperImage = new Image()
		this.upperImage.src = config.upperSrc
	}

	drawLowerImage(ctx, cameraPerson) {
		ctx.drawImage(this.lowerImage,
			utils.withGrid(10.5) - cameraPerson.x,
			utils.withGrid(6) - cameraPerson.y
		)
	}
	drawUpperImage(ctx, cameraPerson) {
		ctx.drawImage(
			this.upperImage,
			utils.withGrid(10.5) - cameraPerson.x,
			utils.withGrid(6) - cameraPerson.y
		)
	};

	isSpaceTaken(currentX, currentY, direction) {
		let { x, y } = utils.nextPosition(currentX, currentY, direction);

		const depanMc = Object.values(this.gameObject).find(obj => {
			return obj.x === x && obj.y === y;
		});
		// console.log(depanMc);

		if (depanMc && depanMc.isTrap){
			return depanMc;
		}
		
		if (depanMc && depanMc.isBox) {
			return depanMc;
		}

		// 2. Semak dinding statik map
		return this.walls[`${x},${y}`] || false;
	}
}
window.OverworldMap = {
	DemoRoom: {
		lowerSrc: "./images/maps/DemoLower.png",
		upperSrc: "./images/maps/DemoUpper.png",
		gameObject: {
			hero: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(5),
				y: utils.withGrid(6),
			}),
			npc1: new Box({
				x: utils.withGrid(6),
				y: utils.withGrid(6),
				data: 5,
				src: "./images/characters/people/npc3.png"
			}),
			trap1: new Trap({
				x: utils.withGrid(5),
				y: utils.withGrid(5),
				data: 5,
				src: "./images/characters/people/npc1.png"
			}),
			// Check: new Check({
			// 	x: utils.withGrid(4),
			// 	y: utils.withGrid(4),
			// 	src: "./images/characters/people/npc1.png"
			// }),
		},
		walls: {
			[utils.asGridCoords(1, 3)]: true,
			[utils.asGridCoords(2, 3)]: true,
			[utils.asGridCoords(3, 3)]: true,
			[utils.asGridCoords(4, 3)]: true,
			[utils.asGridCoords(5, 3)]: true,

			//pintu
			[utils.asGridCoords(6, 4)]: true,
			[utils.asGridCoords(7, 3)]: true,
			[utils.asGridCoords(8, 4)]: true,
			[utils.asGridCoords(9, 3)]: true,
			[utils.asGridCoords(10, 3)]: true,

			//wall kanan
			[utils.asGridCoords(11, 4)]: true,
			[utils.asGridCoords(11, 5)]: true,
			[utils.asGridCoords(11, 6)]: true,
			[utils.asGridCoords(11, 7)]: true,
			[utils.asGridCoords(11, 8)]: true,
			[utils.asGridCoords(11, 9)]: true,

			//wll bawah
			[utils.asGridCoords(10, 10)]: true,
			[utils.asGridCoords(9, 10)]: true,
			[utils.asGridCoords(8, 10)]: true,
			[utils.asGridCoords(7, 10)]: true,
			[utils.asGridCoords(6, 10)]: true,
			[utils.asGridCoords(5, 11)]: true,
			[utils.asGridCoords(4, 10)]: true,
			[utils.asGridCoords(3, 10)]: true,
			[utils.asGridCoords(2, 10)]: true,
			[utils.asGridCoords(1, 10)]: true,

			[utils.asGridCoords(0, 4)]: true,
			[utils.asGridCoords(0, 5)]: true,
			[utils.asGridCoords(0, 6)]: true,
			[utils.asGridCoords(0, 7)]: true,
			[utils.asGridCoords(0, 8)]: true,
			[utils.asGridCoords(0, 9)]: true,


			[utils.asGridCoords(7, 6)]: true,
			[utils.asGridCoords(8, 6)]: true,
			[utils.asGridCoords(7, 7)]: true,
			[utils.asGridCoords(8, 7)]: true,
		}
	},
}
