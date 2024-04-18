//בעזרת ה נעשה ונצליח//

let isPaused = true;
let isMuted = false;
let highestIndex = 0;
let score = 0;
let row = 0;
let maxIndex = [7, 7, 7, 7, 7];
let col = 0;
let ourObject;
let intervalId;
let rectObject = [
  { color: "#8a8cdb", number: "2" },
  { color: "#5f60c2", number: "4" },
  { color: "#5255e7", number: "8" },
  { color: "#393cf0", number: "16" },
  { color: "#3133c0", number: "32" },
  { color: "#0e11af", number: "64" },
  { color: "#02047d", number: "128" },
  { color: "#1d1d44", number: "256" },
  { color: "#5c8dcc", number: "512" },
  { color: "#179ee1", number: "1024" },
  { color: "#073850", number: "2048" },
  { color: "#1398a1", number: "4096" },
];
//user name
let userName = document.getElementById("name");
let user = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")));
userName.innerText = "Hello " + user.firstname;

//score
let lblscore = document.getElementById("score");
lblscore.innerText = `score: ${score}`;
lblmaxScore = document.getElementById("maxScore");
let maxScore = user.maxScore;
lblmaxScore.innerText = `your high score: ${maxScore}`;

let level1 = document.getElementById("stage1");
let level2 = document.getElementById("stage2");
let level3 = document.getElementById("stage3");

//levels
function levels(levelNumber) {
  level1.style.backgroundColor = "white";
  level2.style.backgroundColor = "white";
  level3.style.backgroundColor = "white";
  switch (levelNumber) {
    case 1:
      speed = 500;
      level1.style.backgroundColor = "#070975";
      break;
    case 2:
      speed = 250;
      level2.style.backgroundColor = "#070975";
      break;
    case 3:
      speed = 100;
      level3.style.backgroundColor = "#070975";
      break;

  }
  isPaused = false;
  return speed;
}

//return
let home = document.getElementById("sendHome");
home.addEventListener("click", () => {
  window.open("../html/home.html", "_self");
})

//start
function start() {
  document.addEventListener("keydown", move);
  let pauseButton = document.getElementById("start-btn");
  pauseButton.addEventListener("click", () => changeState(pauseButton));
  let newGame = document.getElementById("new-game");
  newGame.addEventListener("click", restart);
  buildGrid();
  speedGame();
}

function buildGrid() {
  let grid = document.getElementsByClassName("grid-container");
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("grid-item");
      newDiv.id = `${i},${j}`;
      grid[0].appendChild(newDiv);
    }
  }
  isMuted = false;
}

function speedGame() {
  level1.addEventListener("click", () => {
    speed = levels(1);
    play(speed);
  });
  level2.addEventListener("click", () => {
    speed = levels(2);
    play(speed);
  });
  level3.addEventListener("click", () => {
    speed = levels(3);
    play(speed);
  });

}


function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function play(speed) {
  col = randomNumber(0, 4);
  ourObject = randomNumber(0, highestIndex);
  intervalId = setInterval(() => {
    if (!isPaused) changeRect(col, ourObject, speed);
  }, speed);
}

//down rect
function changeRect(col, ourObject, speed) {
  //check if game over
  let i = 0;
  for (i; i < 5 && maxIndex[i] != 0; i++);
  if (i != 5) {
    gameOver("loose");
    return;
  }

  if (row === maxIndex[col]) {
    clearInterval(intervalId);
    crush(col, ourObject);
    row = 0;
    maxIndex[col]--;
    setTimeout(play(speed), 0);
    return;
  }

  let ourRect = document.getElementById(`${row},${col}`);
  ourRect.style.backgroundColor = rectObject[ourObject].color;
  ourRect.innerText = rectObject[ourObject].number;
  if (row !== 0) {
    ourRect = document.getElementById(`${row - 1},${col}`);
    ourRect.style.backgroundColor = "white";
    ourRect.innerText = " ";
  }
  row++;
}

//move
function move(event) {
  switch (event.key) {
    case "ArrowRight":
      if (col != 0 && row < maxIndex[col - 1] + 1) {
        col--;
        ourRect = document.getElementById(`${row - 1},${col}`);
        ourRect.style.backgroundColor = rectObject[ourObject].color;
        ourRect.innerText = rectObject[ourObject].number;
        ourRect = document.getElementById(`${row - 1},${col + 1}`);
        ourRect.style.backgroundColor = "white";
        ourRect.innerText = " ";
        playAudio("moveAudio");
      }
      break;
    case "ArrowLeft":
      if (col != 4 && row < maxIndex[col + 1] + 1) {
        col++;
        ourRect = document.getElementById(`${row - 1},${col}`);
        ourRect.style.backgroundColor = rectObject[ourObject].color;
        ourRect.innerText = rectObject[ourObject].number;
        ourRect = document.getElementById(`${row - 1},${col - 1}`);
        ourRect.style.backgroundColor = "white";
        ourRect.innerText = " ";
        playAudio("moveAudio");
      }
      break;
  }
}
//mute
let mute = document.getElementById("audio")
mute.addEventListener("click", () => {
  if (isMuted == true) {
    mute.innerText = "🔊";
    isMuted = false;
  }
  else {
    isMuted = true;
    mute.innerText = "🔇";
  }
})

//sounds
function playAudio(id) {
  let audio = document.getElementById(id);
  if (isMuted === false)
    audio.play();
  return;
}


//crush
function crush(col) {
  row--;
  //down
  let downFound, rightFound, leftFound;
  if (row != 6) {
    downFound = checkSides(1, 0, col);
  }
  //right
  if (col != 0 && !downFound) {
    rightFound = checkSides(0, -1, col);
  }
  //left
  if (col != 4 && !downFound && !rightFound) {
    leftFound = checkSides(0, 1, col);
  }
  //up
  if (row != 0 && !downFound && !rightFound && !leftFound) {
    let upFound = checkSides(-1, 0, col);
  }
  //בדיקת חורים
  findHoles();
}

//check sides
function checkSides(rowDir, colDir, col) {
  let currentText = document.getElementById(`${row},${col}`).innerText;
  let sideText = document.getElementById(`${row + rowDir},${col + colDir}`).innerText;
  if (currentText === sideText) {
    playAudio("crushAudio");
    let currentRect = document.getElementById(`${row},${col}`);
    currentRect.style.backgroundColor = "white";
    currentRect.innerText = "";
    let i;
    for (i = 0; i < 12; i++) {
      if (rectObject[i].number === sideText) {
        i++;
        break;
      }
    }
    score += Number(rectObject[i].number);
    lblscore.innerText = `score: ${score}`;
    user = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")));
    maxScore = user.maxScore;

    if (score > maxScore)
      lblmaxScore.innerText = `your high score: ${score}`;

    //check if win
    if (rectObject[i].number === "512") {
      gameOver("win");
      return false;
    }

    if (highestIndex < 5)
      highestIndex = Math.max(highestIndex, i);

    let sideRect = document.getElementById(`${row + rowDir},${col + colDir}`);
    sideRect.style.backgroundColor = rectObject[i].color;
    sideRect.innerText = rectObject[i].number;
    maxIndex[col]++;
    row += rowDir + 1;
    col += colDir;


    setTimeout(crush(col), 0);
    return true;
  }
  return false;
}

function findHoles() {
  for (let i = 6; i > 0; i--) {
    for (let j = 0; j < 5; j++) {
      let currentText = document.getElementById(`${i},${j}`).innerText;
      let upText = document.getElementById(`${i - 1},${j}`).innerText;
      if (currentText === "" && upText != "") {
        //down col
        let downRect = document.getElementById(`${i},${j}`);
        let upRect = document.getElementById(`${i - 1},${j}`);
        let k = 0;
        do {
          k++;
          downRect.style.backgroundColor = upRect.style.backgroundColor;
          downRect.innerText = upRect.innerText;
          upRect.style.backgroundColor = "white";
          upRect.innerText = "";
          downRect = document.getElementById(`${i - k},${j}`);
          upRect = document.getElementById(`${i - 1 - k},${j}`);
        } while (upRect.innerText != "");
      }
    }
  }
}

//pause/resume
function changeState(pauseButton) {
  if (isPaused === true) {
    isPaused = false;
    pauseButton.innerText = "pause ▶️";
  } else {
    isPaused = true;
    pauseButton.innerText = "resume ⏸️";
  }
  playAudio("pauseAudio");

}

//game over
function gameOver(inputText) {
  clearInterval(intervalId);
  let gridItems = document.querySelectorAll(".grid-item");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "white";
    gridItems[i].innerText = "";
  }
  let grid = document.querySelector(".grid-container");
  if (inputText === "loose") {
    grid.innerText = "GAME OVER!!!  You Are A Looser😕";
    playAudio("looseAudio1");
    playAudio("looseAudio2");
  }
  else {
    grid.innerText = "YOU WIN!!!!!  congratulations🎇🎇🎇";
    playAudio("winAudio");
  }
  grid.classList.add("gameOver");
  //save max score
  if (score > maxScore) {
    let mail = user.mail;
    user = localStorage.getItem(JSON.parse(mail));
    user.maxScore = score;
    localStorage.setItem(JSON.stringify(user));
  }
  return;
}

//new game
function restart() {
  clearInterval(intervalId);
  mute.innerText = "🔊";
  isMuted = false;
  isPaused = true;
  if (score >= maxScore) {
    user.maxScore = score;
    localStorage.setItem(user.mail, JSON.stringify(user));
  }
  score = 0;
  lblscore.innerText = `score: ${score}`;
  row = 0;
  let grid = document.querySelector(".grid-container");
  grid.innerText = "";
  grid.classList.remove("gameOver");

  buildGrid();
  level1.style.backgroundColor = "white";
  level2.style.backgroundColor = "white";
  level3.style.backgroundColor = "white";
  highestIndex = 0;
  maxIndex = [7, 7, 7, 7, 7];
  level1.removeEventListener("click");
  level2.removeEventListener("click");
  level3.removeEventListener("click");
  speedGame();
}

start();
