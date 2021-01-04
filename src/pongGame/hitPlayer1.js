exports.hitRectangle = () => {

    console.log(`velocity before : ${velocityBallX}`);
    if (velocityBallX < 0) {
        velocityBallX = (velocityBallX * -1) + 50;
    }
    else
        velocityBallX += 50;
    console.log(`velocity after : ${velocityBallX}`);

    ball.setVelocityX(velocityBallX);

    if (velocityBallY < 0) {
        velocityBallY = velocityBallY * -1;
        ball.setVelocityY(velocityBallY);
    }
}