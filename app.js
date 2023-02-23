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
    //let enemyValue = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    enemy.style.left = Math.floor(Math.random() * 320) + "px";
    board.appendChild(enemy);
}, 3000);

//Creating Balls
let createBalls = setInterval(() => {
    let ball =  document.createElement("div");
    ball.classList.add("ball");
    //let ballValue = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    ball.style.left = Math.floor(Math.random() * 320) + "px";
    board.appendChild(ball);
}, 5000);

//Moving the enemies
let moveEnemies = setInterval(() => {
    let enemies = document.getElementsByClassName('enemy');

    if(enemies != undefined){
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            let enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
            let enemyBound = enemy.getBoundingClientRect();
            /* if(playerBound.width <= enemyBound.width){
                alert("Game Over");
                clearInterval(moveEnemies);
                window.location.reload();
            } */
            enemy.style.top = enemyTop + 25 + "px";
        }
    }
},450);

//Moving the balls
let moveBalls = setInterval(() => {
    let balls = document.getElementsByClassName('ball');

    if(balls != undefined){
        for (let i = 0; i < balls.length; i++) {
            let ball = balls[i];
            let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
            let ballBound = ball.getBoundingClientRect();
             if(ballBound.bottom >= playerBound.top + 600){
                ball.parentElement.removeChild(ball);
                document.querySelector(".points").innerHTML = parseInt(document.querySelector(".points").innerHTML) + 1;
            } 
            ball.style.top = ballTop + 25 + "px";
        }  
    }
},450);

