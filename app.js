const board = document.querySelector('#board');
const player = document.querySelector('#player');

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
}, 1000);

//Creating Balls
let createBalls = setInterval(() => {
    let ball =  document.createElement("div");
    ball.classList.add("ball");
    //let ballValue = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    ball.style.left = Math.floor(Math.random() * 320) + "px";
  
    board.appendChild(ball);
}, 3000);

//Moving the enemies
let moveEnemies = setInterval(() => {
    let enemies = document.getElementsByClassName('enemy');

    if(enemies != undefined){
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            let enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
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
            ball.style.top = ballTop + 25 + "px";
        }

        let ballBound = balls.getBoundingClientRect();
        let playerBound = player.getBoundingClientRect();

        if (playerBound.left >= ballBound.left && playerBound.right <= ballBound.right && playerBound.top <= ballBound.top && playerBound.bottom <= ballBound.bottom ) {
            balls.parentElement.removeChild(balls);
          }
    }
},450);

//Detect Colision

let rockbound = rock.getBoundingClientRect();
let bulletbound = bullet.getBoundingClientRect();
