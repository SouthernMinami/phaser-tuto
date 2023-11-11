import Phaser from 'phaser';

class MyScene extends Phaser.Scene {
	constructor() {
		super({ key: 'myscene' });
	}

    // Preload assets
	preload() {
		this.load.setBaseURL('https://labs.phaser.io');

		this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('logo', 'assets/sprites/phaser3-logo.png');
	}

    // Create game objects
	create() {
		this.add.image(400, 300, 'sky');

		const logo = this.physics.add.image(400, 100, 'logo');

        // Bounce speed for x and y
		logo.setVelocity(100, 200);
        // Bounce on the edges of the screen
		logo.setBounce(1, 1);
		logo.setCollideWorldBounds(true);
	}
}

export default MyScene;