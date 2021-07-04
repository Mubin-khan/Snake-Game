import { getInputDirection } from './input.js';
import {update as up, draw as dr, Snake_speed, snakebody } from './snake.js'
import {update as foodup, draw as fooddr} from './food.js'


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameover = false;

function main(currentTime){
    if(gameover)return alert("You Lost");
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender < 1/Snake_speed)return;


    lastRenderTime = currentTime;
    //console.log('Render');

    update();
    draw();
}
window.requestAnimationFrame(main);

function update(){
    gameBoard.innerHTML = '';
    up();
    foodup();
    check();
}

function draw(){
    dr(gameBoard);
    fooddr(gameBoard);
}

function check(){
    console.log(snakebody[0]);
    gameover = touchEdge(snakebody[0]);
}

function touchEdge(pos){
    return pos.x < 1 || pos.x > 21 || pos.y < 1 || pos.y > 21;
}