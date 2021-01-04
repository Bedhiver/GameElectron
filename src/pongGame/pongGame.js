var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    backgroundColor: '#4488aa',
    scene: {
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

var ball;
function preloadGame() {
    this.load.image('ball', '../../assets/pangball.png');
}

var cursor;
var rectPlayer1;
var rectPlayer2;
var velocityBallX = getRandomVelocity();
var velocityBallY = 100;
var keyZ;
var keyS;

function createGame() {
    cursor = this.input.keyboard.createCursorKeys();

    ball = this.physics.add.sprite(400, 300, 'ball');
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
    ball.setVelocityX(velocityBallX);
    ball.setVelocityY(velocityBallY);

    rectPlayer1 = this.add.rectangle(10, 300, 10, 120, 0xd41f1f);
    rectPlayer2 = this.add.rectangle(790, 300, 10, 120, 0xd41f1f);

    // player1 = this.physics.add.existing(rectPlayer1);
    // player2 = this.physics.add.existing(rectPlayer2);
    this.physics.add.existing(rectPlayer1);
    this.physics.add.existing(rectPlayer2);

    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    rectPlayer1.body.collideWorldBounds = true;
    rectPlayer2.body.collideWorldBounds = true;
    rectPlayer1.body.pushable = false;

    this.physics.add.collider(ball, rectPlayer1, hitPlayer1, null, this);

}

var player2Moves = require('./commandPlayer2.js');
function updateGame() {
    if (cursor.up.isDown) {
        rectPlayer1.body.velocity.y = -150;
    }
    else if (cursor.down.isDown) {
        rectPlayer1.body.velocity.y = 150;
    }
    else {
        rectPlayer1.body.velocity.y = 0;
    }
    player2Moves.movePlayer2();
}

var hitRect1 = require('./hitPlayer1');
function hitPlayer1() {
    hitRect1.hitRectangle();
}

function getRandomVelocity() {
    let rand = Math.floor(Math.random() * 50) + 50;
    return Math.random() < 0.5 ? rand * -1 : rand;
}

var game = new Phaser.Game(config);