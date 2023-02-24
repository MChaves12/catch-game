//Start Game
const startScreen = document.querySelector('#start-screen');
const gameArea = document.querySelector('#game-area');
const startBtn = document.querySelector('#start-screen button');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameArea.classList.remove('hidden');
});

//Game Area
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

//Creating Elements
function createElemente(elementName){
    let createElement = setInterval(() => {
        let element =  document.createElement("div");
        element.classList.add(elementName);
        element.style.left = Math.floor(Math.random() * 320) + "px";
        board.appendChild(element);
    }, 5000);
}

createElemente('enemy');
createElemente('ball');

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
            if(enemyBound.left >= playerBound.left && enemyBound.right <= playerBound.right && enemyBound.top <= playerBound.top && enemyBound.bottom <= playerBound.bottom){
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
            let playerBound = player.getBoundingClientRect();
             if(ballBound.left >= playerBound.left && ballBound.right <= playerBound.right && ballBound.top <= playerBound.top && ballBound.bottom <= playerBound.bottom){
                ball.parentElement.removeChild(ball);
                document.querySelector(".points").innerHTML = parseInt(document.querySelector(".points").innerHTML) + 1;
            } 
            ball.style.top = ballTop + 60 + "px";
        }  
    }
}, 500);

