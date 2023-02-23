//Start Game
const startScreen = document.querySelector('#start-screen');
const gameArea = document.querySelector('#game-area');
const startBtn = document.querySelector('#start-screen button');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameArea.classList.remove('hidden');
});


const board = document.querySelector('#board');
const player = document.querySelector('#player');
let playerBound = player.getBoundingClientRect();


//Player Controls
window.addEventListener('keydown', (event) => {
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (event.key == "ArrowLeft" && left > 0) {
      player.style.left = left - 10 + "px";
    }
    else if (event.key == "ArrowRight" && left <= 320) {
        player.style.left = left + 10 + "px";
      }
});

//Creating Enemies
let createEnemy = setInterval(() => {
    let enemy =  document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.left = Math.floor(Math.random() * 320) + "px";
    board.appendChild(enemy);
}, 5000);

//Creating Balls
let createBalls = setInterval(() => {
    let ball =  document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = Math.floor(Math.random() * 320) + "px";
    board.appendChild(ball);
}, 5000);

//Moving the enemies
let moveEnemies = setInterval(() => {
    let enemies = document.getElementsByClassName('enemy');
    const player = document.querySelector('#player');


    if(enemies != undefined){
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            let enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
            let playerBound = player.getBoundingClientRect();
            let enemyBound = enemy.getBoundingClientRect();
            if(enemyBound.bottom >= playerBound.top && enemyBound.left <= playerBound.right && enemyBound.right <= playerBound.left && enemyBound.top >= playerBound.bottom){
                alert("Game Over");
                clearInterval(moveEnemies);
                window.location.reload();
            }
            enemy.style.top = enemyTop + 25 + "px";
        }
    }
}, 1500);

//Moving the balls
let moveBalls = setInterval(() => {
    let balls = document.getElementsByClassName('ball');
    const player = document.querySelector('#player');


    if(balls != undefined){
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
            let ballBound = ball.getBoundingClientRect();
            let playerBound = player.getBoundingClientRect().top;

             if(ballBound.bottom >= playerBound && ballBound.left <= playerBound && ballBound.right <= playerBound && ballBound.top >= playerBound){
                ball.parentElement.removeChild(ball);
                document.querySelector(".points").innerHTML = parseInt(document.querySelector(".points").innerHTML) + 1;
            } 
            ball.style.top = ballTop + 60 + "px";
        }  
    }
}, 500);

