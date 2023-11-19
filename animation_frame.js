/* 프레임마다 처리할 함수를 정의한다 */
var animation;
function playCanvas(){
    animation = requestAnimationFrame(playCanvas); // 프레임마다 해당 함수를 반복하게 해준다

    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이동하고 난 이전의 객체는 화면에서 제거한다.

    playground.draw();
    bar1.draw();
    bar2.draw();
    ball.draw();

    bar1.move();
    bar2.move();
    ball.move(xUnit, yUnit);
    checkBallCollision();
    checkGameStatus();
}

playCanvas();

// 참고: https://www.youtube.com/watch?v=qkTtmgCjHhM
// 참고: https://www.youtube.com/watch?v=7TXGvVblfLs