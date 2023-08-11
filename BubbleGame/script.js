var panelContent = document.querySelector(".panel-content");
var timerBox = document.querySelector(".timer-box");

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

var time = 60;
function timeFunction() {
    var timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      timerBox.innerHTML = time;
    }
    else{
        clearInterval(timer);
    }
  }, 1000);
}

timeFunction();
bubbleMaker(panelContent);
