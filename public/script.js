const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const playButton = document.getElementById('playButton');
const gameOverEl = document.getElementById('gameOver');
const finalScoreEl = document.getElementById('finalScore');
const claimTokensButton = document.getElementById('claimTokens');

let playerX = canvas.width / 2;
const playerWidth = 50;
const playerHeight = 10;
const playerSpeed = 5;

let items = [];
const itemSize = 10;
const itemSpeed = 2;
let score = 0;
let time = 0;
let lives = 5;
let gameOver = false;

function drawPlayer() {
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(playerX, canvas.height - playerHeight, playerWidth, playerHeight);
}

function drawItem(item) {
    ctx.beginPath();
    ctx.arc(item.x, item.y, itemSize, 0, Math.PI * 2);
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.closePath();
}

function updateItems() {
    items.forEach((item, index) => {
        item.y += itemSpeed;
        if (item.y + itemSize > canvas.height) {
            items.splice(index, 1);
            if (item.color === '#0095DD') {
                lives--;
                if (lives <= 0) {
                    gameOver = true;
                    endGame();
                }
            }
        }
    });

    if (Math.random() < 0.02) {
        const x = Math.random() * (canvas.width - itemSize * 2) + itemSize;
        const color = Math.random() < 0.5 ? '#0095DD' : '#FF0000';
        items.push({ x, y: -itemSize, color });
    }
}

function detectCollisions() {
    items.forEach((item, index) => {
        if (
            item.y + itemSize > canvas.height - playerHeight &&
            item.x > playerX && item.x < playerX + playerWidth
        ) {
            items.splice(index, 1);
            if (item.color === '#0095DD') {
                score++;
            } else {
                score--;
            }
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    items.forEach(item => drawItem(item));
    ctx.fillText(`Score: ${score}`, 8, 20);
    ctx.fillText(`Lives: ${lives}`, canvas.width - 60, 20);
}

function update() {
    if (gameOver) {
        ctx.fillText('Game Over', canvas.width / 2 - 40, canvas.height / 2);
        return;
    }

    if (rightPressed) {
        playerX = Math.min(playerX + playerSpeed, canvas.width - playerWidth);
    } else if (leftPressed) {
        playerX = Math.max(playerX - playerSpeed, 0);
    }
    updateItems();
    detectCollisions();
    draw();
    time++;
    timerEl.textContent = `Time: ${Math.floor(time / 60)}`;
    scoreEl.textContent = `Score: ${score}`;
    requestAnimationFrame(update);
}

function endGame() {
    gameOverEl.classList.remove('hidden');
    finalScoreEl.textContent = score;
    const tokensEarned = calculateTokens(score, Math.floor(time / 60));
    alert(`You earned ${tokensEarned} tokens!`);
}

function calculateTokens(score, time) {
    return score * time;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
    }
});

let rightPressed = false;
let leftPressed = false;

playButton.addEventListener('click', () => {
    score = 0;
    time = 0;
    lives = 5;
    gameOver = false;
    items = [];
    playerX = canvas.width / 2;
    gameOverEl.classList.add('hidden');
    update();
});

claimTokensButton.addEventListener('click', () => {
    const tokensEarned = calculateTokens(score, Math.floor(time / 60));
    alert(`You claimed ${tokensEarned} tokens!`);
});

update();
