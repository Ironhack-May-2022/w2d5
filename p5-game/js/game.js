class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.obstacles = []
		this.backgroundImages = []
		this.coinImage;
	}
	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
			{ src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			{ src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			{ src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		]
		this.playerImage = loadImage('assets/player/bb8.gif')
		this.coinImage = loadImage('assets/coins/tile000.png')
	}
	draw() {
		console.log(this.obstacles.length)
		clear()
		this.background.draw()
		this.player.draw()
		// here we add obstacle objects to the array every x frames
		// frameCount is a P5 variable
		// console.log(frameCount)
		if (frameCount % 90 === 0) {
			// console.log('add coin')
			this.obstacles.push(new Obstacle(this.coinImage))
			console.log(this.obstacles)
		}
		// iterate over the obstacles array and call the draw function for 
		// every obstacle
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter((obstacle) => {
			// for 'this' to have the right context here (being the Game object)
			// we have to use an arrow function for the callback
			// console.log(this)
			if (obstacle.collision(this.player) || obstacle.x < 0) {
				return false
			} else {
				return true
			}
		})
	}
}
