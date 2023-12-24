
gsap.from(".menu-screen .main-instruction",{
    delay:0.2,
    // x:-200,
    // scale:0,
    rotate:-45,
    opacity:0,
    duration: 0.3,
})

var panelContent = document.querySelector(".panel-content");
var timerBox = document.querySelector(".timer-box");
var hitBox = document.querySelector(".hit-box");
var scoreBox = document.querySelector(".score-box");
var gameOverScreen = document.querySelector(".game-over-screen");
var gameOverScore = document.querySelector(".game-over-screen .current-score");
var retplayBtn = document.querySelector(".game-over-screen button");
var startBtn = document.querySelector(".menu-screen button");
var highScoreDisplay = document.querySelector(".game-over-screen .high-score");

var score = 0;

function bubbleMaker(panelContent) {
  var query = "";
  var panelWidth = panelContent.offsetWidth;
  var panelHeight = panelContent.offsetHeight;
  var bubbleSize = 40;
  var bubblePerRow = panelWidth / bubbleSize;
  var numRow = panelHeight / bubbleSize;
  var totalBubbles = bubblePerRow * numRow;

  for (let i = 0; i <= totalBubbles; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    query += ` <div class="bubble">${randomNum}</div> `;
  }

  document.querySelector(".panel-content").innerHTML = query;
  var bubbles = document.getElementsByClassName("bubble");
  for (let i = 0; i < bubbles.length; i++)
  {
      bubbles[i].style.animationName = "bubble-anim";
      bubbles[i].style.animationIterationCount = "infinite";
      bubbles[i].style.animationDelay = Math.random() + "s";
      bubbles[i].style.animationDuration = 0.8 + Math.random()*0.5 + "s";
  }
}

function gameOver() {
    gameOverScreen.style.display = "flex";
    gsap.from(".game-over-screen",{
        y:"-100vh",
        duration:0.3
    });
    gameOverScore.innerHTML = score;
    if (score > getHighScore())
    {
        setHighScore(score);
    }
    highScoreDisplay.innerHTML = getHighScore();
}

function setHighScore(score) {
    document.cookie = "highScore=" + score + ";path=/";
}
function getHighScore() {
    if (document.cookie == "") {
        return 0;
    } else {
        return document.cookie.split("=")[1];
    }
}

var time = 5;
timerBox.innerHTML = time;
function timeFunction() {
    var timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      timerBox.innerHTML = time;
    }
    else{
        gameOver();
        clearInterval(timerInterval);
    }
  }, 1000);
}

function generateHit() {
    let hitNum = Math.floor(Math.random()*10);
    hitBox.innerHTML = hitNum;
}

panelContent.addEventListener("click", (dets)=>{//Event bubbling
    if(dets.target.classList.contains('bubble')) {
        if(dets.target.innerHTML == hitBox.innerHTML){
            score += 10;
            scoreBox.innerHTML = score;
            if (score >= 0) {
                scoreBox.style.color = "rgb(28, 76, 223)";
            }
            generateHit();
            bubbleMaker(panelContent);
        }
        else{
            score -= 10;
            scoreBox.innerHTML = score;
            if (score < 0) {
                scoreBox.style.color = "red";
            }
            generateHit();
            bubbleMaker(panelContent);
        }
    }
});

startBtn.addEventListener("click", () => {

    gsap.to(".menu-screen",{
        scale:0
    });
    generateHit();
    timeFunction();
    bubbleMaker(panelContent);
});

retplayBtn.addEventListener("click", () => {
    score = 0;
    scoreBox.innerHTML = score;
    scoreBox.style.color = "rgb(28, 76, 223)";
    gameOverScreen.style.display = "none"
    generateHit();
    timeFunction();
    bubbleMaker(panelContent);
    time = 61;
});
