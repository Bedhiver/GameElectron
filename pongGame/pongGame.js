var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#4488aa',
    scene: {
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

function preloadGame() {
    this.load.image('ball', '../assets/pangball.png');
}

var cursors;
function createGame() {
    this.add.image(400, 200, 'ball');
    cursor = this.input.keyboard.createCursorKeys();
    console.log(cursor);


    var padPlayer1 = this.add.rectangle(200, 150, 148, 148, 0x6666ff);
    var padPlayer2 = this.add.rectangle(250, 50, 148, 148, 0x6666ff);
}

function updateGame() {

}

var game = new Phaser.Game(config);