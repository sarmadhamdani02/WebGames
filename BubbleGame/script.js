var panelContent = document.querySelector(".panel-content");
var timerBox = document.querySelector(".timer-box");
var hitBox = document.querySelector(".hit-box");
var scoreBox = document.querySelector(".score-box");
var gameOverScreen = document.querySelector(".game-over-screen");
var gameOverScore = document.querySelector(".game-over-screen .current-score");
var retplayBtn = document.querySelector(".game-over-screen button");
var startBtn = document.querySelector(".menu-screen button");

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
}

function gameOver() {
    gameOverScreen.style.display = "flex";
    gsap.from(".game-over-screen",{
        y:"-100vh",
        duration:0.3
    });
    gameOverScore.innerHTML = score;
}

var time = 60;
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
        score -= 5;
        scoreBox.innerHTML = score;
        if (score < 0) {
            scoreBox.style.color = "red";
        }
        generateHit();
        bubbleMaker(panelContent);

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
    gameOverScreen.style.display = "none"
    generateHit();
    timeFunction();
    bubbleMaker(panelContent);
    time = 61;
});




