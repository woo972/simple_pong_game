const MOVE = {
    STOP : 'STOP',
    UP : 'UP',
    DOWN : 'DOWN'
}
Object.freeze(MOVE);

const BALL_DIRECTION = {
    RIGHT_DOWN : 'RIGHT_DOWN',
    RIGHT_UP : 'RIGHT_UP',
    LEFT_DOWN : 'LEFT_DOWN',
    LEFT_UP : 'LEFT_UP'
}
Object.freeze(BALL_DIRECTION);

const COLLISION_TYPE = {
    WALL : 'WALL',
    DEADLINE : 'DEADLINE',
    BAR : 'BAR',
    UNKNOWN : 'UNKNOWN'
}
Object.freeze(COLLISION_TYPE)