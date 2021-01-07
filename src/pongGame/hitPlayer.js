exports.hitPlayer = () => {

    console.log(`velocity before : ${velocityBallX}`);
    if (velocityBallX < 0) {
        velocityBallX = (velocityBallX * -1) + 50;
    }
    else
        velocityBallX += 50;
    console.log(`velocity after : ${velocityBallX}`);

    // ball.setVelocityX(velocityBallX);
    ball.setVelocityX(isPlayer1Hit ? velocityBallX : velocityBallX * -1);

    if (velocityBallY < 0) {
        velocityBallY = velocityBallY * -1;
        ball.setVelocityY(velocityBallY);
    }

    ball.setVelocityY(isTopHit ? velocityBallY * -1 : velocityBallY);
}