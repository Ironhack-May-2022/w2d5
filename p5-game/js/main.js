const game = new Game()

// all these functions will be called by the P5 library
function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 600)
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		game.player.jump()
	}
}
