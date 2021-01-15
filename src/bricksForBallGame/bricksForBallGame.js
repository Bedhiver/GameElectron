var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#939cab',
    scene: {
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

var game = new Phaser.Game(config);

function preloadGame() {
    this.load.image('ball', '../../assets/pangball.png');
}

function createGame() {
    
}

function updateGame() {
    
}