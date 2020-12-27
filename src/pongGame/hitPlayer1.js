exports.hitRectangle = (ball, rectPlayer1) => {
    
    console.log(`velocity before : ${velocityBallX}`);
    velocityBallX += 500;
    console.log(`velocity after : ${velocityBallX}`);

    ball.setVelocityX(velocityBallX);

    if (velocityBallY < 0) {
        velocityBallY = velocityBallY * -1;
        ball.setVelocityY(velocityBallY);
    }

    rectPlayer1.body.velocity.x = 0;
}