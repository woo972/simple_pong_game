var currentDirection = BALL_DIRECTION.RIGHT_DOWN;
var collisionStatus = false;
var collisionType = COLLISION_TYPE.UNKNOWN;
var winner = 'Unknown'

var RIGHT_DEADLINE = playground.Pointer.x + playground.Size.width;
var LEFT_DEADLINE = playground.Pointer.x;
var UPPER_WALL = playground.Pointer.y;
var BOTTOM_WALL = playground.Pointer.y + playground.Size.height;

var xUnit = 4;
var yUnit = 4;

/* 게임 종료 이벤트를 정의한다. */
function checkGameStatus(){
    if(collisionStatus && collisionType == COLLISION_TYPE.DEADLINE){
        alert('winner is '+winner);
        cancelAnimationFrame(animation);
    }
}

/* 충돌 이벤트를 정의한다. */
function checkBallCollision(){
    var rightOfBall = ball.Pointer.x + ball.Size.width;
    var leftOfBall = ball.Pointer.x;
    var headOfBall = ball.Pointer.y;
    var bottomOfBall = ball.Pointer.y + ball.Size.height;

    var rightOfBar1 = bar1.Pointer.x + bar1.Size.width;
    var headOfBar1 = bar1.Pointer.y;
    var bottomOfBar1 = bar1.Pointer.y + bar1.Size.height;

    var leftOfBar2 = bar2.Pointer.x;
    var headOfBar2 = bar2.Pointer.y;
    var bottomOfBar2 = bar2.Pointer.y + bar2.Size.height;

    console.log('x:'+ball.Pointer.x +' y:'+ball.Pointer.y);

    // 막대에 충돌하는 경우
    if(leftOfBall <= rightOfBar1
        && headOfBall <= bottomOfBar1
        && bottomOfBall >= headOfBar1){
            collisionStatus = true;
            collisionType = COLLISION_TYPE.BAR;
            changeBallDirection();
        return;
    }else if(rightOfBall >= leftOfBar2
            && headOfBall <= bottomOfBar2
            && bottomOfBall >= headOfBar2){
            collisionStatus = true;
            collisionType = COLLISION_TYPE.BAR;
            changeBallDirection();
        return;
    }

    // 벽에 충돌하는 경우
    if(rightOfBall >= RIGHT_DEADLINE){
        collisionStatus = true;
        collisionType = COLLISION_TYPE.DEADLINE;
        winner = 'player1';
        return;
    }else if(leftOfBall <= LEFT_DEADLINE){
        collisionStatus = true;
        collisionType = COLLISION_TYPE.DEADLINE;
        winner = 'player2';
        return;
    }else if(headOfBall <= UPPER_WALL){
        collisionStatus = true;
        collisionType = COLLISION_TYPE.WALL;
        changeBallDirection();
        return;
    }else if(bottomOfBall >= BOTTOM_WALL){
        collisionStatus = true;
        collisionType = COLLISION_TYPE.WALL;
        changeBallDirection();
        return;
    }
}

/* 충돌 시 공이 어느 방향으로 갈지 정한다. */
function changeBallDirection(){
    if(!collisionStatus){
        return;
    }

    if(collisionType == COLLISION_TYPE.BAR){
        // 막대에 튕겼을 때는 임의의 방향으로 보낸다
        var zeroOrOne = Math.floor(Math.random() * 2);
        xUnit = Math.floor(Math.random() * 8);
        yUnit = Math.floor(Math.random() * 8);
        
        switch(currentDirection) {
            case BALL_DIRECTION.LEFT_DOWN:
                currentDirection = zeroOrOne ? BALL_DIRECTION.RIGHT_DOWN : BALL_DIRECTION.RIGHT_UP;
                break;
            case BALL_DIRECTION.LEFT_UP:
                currentDirection = zeroOrOne ? BALL_DIRECTION.RIGHT_DOWN : BALL_DIRECTION.RIGHT_UP;
                break;
            case BALL_DIRECTION.RIGHT_DOWN:
                currentDirection = zeroOrOne ? BALL_DIRECTION.LEFT_DOWN : BALL_DIRECTION.LEFT_UP;
                break;
            case BALL_DIRECTION.RIGHT_UP:
                currentDirection = zeroOrOne ? BALL_DIRECTION.LEFT_DOWN : BALL_DIRECTION.LEFT_UP;
                break;
        }
    }else if(collisionType == COLLISION_TYPE.WALL){
        switch(currentDirection) {
            case BALL_DIRECTION.RIGHT_DOWN:
                currentDirection = BALL_DIRECTION.RIGHT_UP;
                break;
            case BALL_DIRECTION.RIGHT_UP:
                currentDirection = BALL_DIRECTION.RIGHT_DOWN;
                break;
            case BALL_DIRECTION.LEFT_DOWN:
                currentDirection = BALL_DIRECTION.LEFT_UP;
                break;
            default:
                currentDirection = BALL_DIRECTION.LEFT_DOWN;
        }
    }

    collisionType = COLLISION_TYPE.UNKNOWN;
    collisionStatus = false;
}

/* 사용자 입력 이벤트를 정의한다 */
document.addEventListener('keydown', function(e){
    if(e.key == 'w'){
        bar1.Move = MOVE.UP;
    } else if(e.key == 's'){
        bar1.Move = MOVE.DOWN;
    }

    if(e.key == 'ArrowUp'){
        bar2.Move = MOVE.UP;
    } else if(e.key == 'ArrowDown'){
        bar2.Move = MOVE.DOWN;
    }
});

document.addEventListener('keyup', function(e){
    if(e.key == 'w' || e.key == 's'){
        bar1.Move = MOVE.STOP;
    } 

    if(e.key == 'ArrowUp' || e.key == 'ArrowDown'){
        bar2.Move = MOVE.STOP
    }
});