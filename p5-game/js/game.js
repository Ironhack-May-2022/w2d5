class Game {
	constructor() {
		this.background = new Background()
		this.backgroundImages = []
		this.player = new Player()
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
	}
	draw() {
		clear()
		this.background.draw()
		this.player.draw()
	}
}
