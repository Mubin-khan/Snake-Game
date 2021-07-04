import {onSnake,expandSnake} from './snake.js'

let foodbody = {x:2, y:4}
const expantionrate = 1;

export function update(){
   if(onSnake(foodbody)){
       expandSnake(expantionrate);
       foodbody = getrandomfoodpos();
   }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = foodbody.x;
        foodElement.style.gridColumnStart = foodbody.y;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getrandomfoodpos(){
    let newfoodpos;
    while(newfoodpos == null || onSnake(newfoodpos)){
        newfoodpos = randomgridpos();
    }
    return newfoodpos;
}

const grid_size = 21

function randomgridpos(){
    return{
        x: Math.floor(Math.random()*grid_size)+1,
        y: Math.floor(Math.random()*grid_size)+1
    }
}