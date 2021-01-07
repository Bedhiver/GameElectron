exports.movePlayer1 = () => {
    if (cursor.up.isDown) {
        containerPlayer2.body.velocity.y = -150;
    }
    else if (cursor.down.isDown) {
        containerPlayer2.body.velocity.y = 150;
    }
    else {
        containerPlayer2.body.velocity.y = 0;
    }
}

exports.movePlayer2 = () => {
    if (keyZ.isDown) {
        containerPlayer1.body.velocity.y = -150;
    }
    else if (keyS.isDown) {
        containerPlayer1.body.velocity.y = 150;
    }
    else
        containerPlayer1.body.velocity.y = 0;
}
