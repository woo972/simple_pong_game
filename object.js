class Bar {
    constructor(x, y, w, h, color){
        this.Move = MOVE.STOP;
        this.Pointer = new Pointer(x, y);
        this.Size = new Size(w, h);
        this.Property = new Property(color);
    }
    draw(){
        ctx.fillStyle = this.Property.color;
        ctx.fillRect(this.Pointer.x, this.Pointer.y, this.Size.width, this.Size.height); 
    }
    move(){
        var moveUnit = 3.5;
        if(this.Move == MOVE.UP
            && this.Pointer.y - moveUnit >= playground.Pointer.y){
            this.Pointer.y -= moveUnit;
        }else if(this.Move == MOVE.DOWN
            && this.Pointer.y + this.Size.height + moveUnit <= playground.Pointer.y + playground.Size.height){
            this.Pointer.y += moveUnit;
        }
    }
}

class Pointer {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Size {
    constructor(w, h){
        this.width = w;
        this.height = h;
    }
}

class Property {
    constructor(color){
        this.color = color;
    }
}

/* 필요한 객체를 준비한다 */
var playground = {
    Pointer : new Pointer(10, 10),
    Size : new Size(600, 400),
    Property : new Property('black'),
    draw(){
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.Property.color;
        ctx.strokeRect(this.Pointer.x, this.Pointer.y, this.Size.width, this.Size.height);
    }
}

var bar1 = new Bar(100 - 30, 200, 30, 100,'green');
var bar2 = new Bar(playground.Pointer.x + playground.Size.width - 100, 200, 30, 100, 'red');

var ball = {
    Pointer : new Pointer(100, 100),
    Size : new Size(15, 15),
    Property : new Property('black'),
    draw(){
        ctx.fillStyle = this.Property.color;
        ctx.fillRect(this.Pointer.x, this.Pointer.y, this.Size.width, this.Size.height); 
    },
    move(xUnit, yUnit){
        var xAxisMoveUnit = 4;
        var yAxisMoveUnit = 4;
        if(xUnit > 0){
            xAxisMoveUnit = xUnit;
        }
        if(yUnit > 0){
            yAxisMoveUnit = yUnit;
        }
        switch(currentDirection){
            case BALL_DIRECTION.RIGHT_DOWN:
                ball.Pointer.x += xAxisMoveUnit;
                ball.Pointer.y += yAxisMoveUnit;
                break;
            case BALL_DIRECTION.RIGHT_UP:
                ball.Pointer.x += xAxisMoveUnit;
                ball.Pointer.y -= yAxisMoveUnit;
                break;
            case BALL_DIRECTION.LEFT_DOWN:
                ball.Pointer.x -= xAxisMoveUnit;
                ball.Pointer.y += yAxisMoveUnit;
                break;
            case BALL_DIRECTION.LEFT_UP:
                ball.Pointer.x -= xAxisMoveUnit;
                ball.Pointer.y -= yAxisMoveUnit;
                break;
        }
    }
}