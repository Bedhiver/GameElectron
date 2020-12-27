exports.movePlayer2 = (keyZ, keyS) => {
    if (keyZ.isDown) {
        rectPlayer2.body.velocity.y = -150;
    }
    else if (keyS.isDown) {
        rectPlayer2.body.velocity.y = 150;
    }
    else
        rectPlayer2.body.velocity.y = 0;
}