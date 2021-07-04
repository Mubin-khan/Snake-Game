import { getInputDirection } from './input.js'

export const Snake_speed = 5;

export const snakebody = [
    {x:10, y:11}
]
let newSegment = 0;

export function update(){
    addSegments()
    let inputDirection = getInputDirection();
    for(let i = snakebody.length-2; i >= 0; i--){
        snakebody[i+1] = {...snakebody[i]};
    }
    snakebody[0].x += inputDirection.x;
    snakebody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakebody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function onSnake(pos){
    return snakebody.some(segment=>{
        return equalpos(segment,pos)
    })
}

export function expandSnake(amount){
    newSegment += amount;
}

function equalpos(seg,pos){
    return seg.x === pos.x && seg.y === pos.y;
}

function addSegments(){
    if(newSegment)snakebody.push({...snakebody[snakebody.length-1]});
    newSegment = 0;
}