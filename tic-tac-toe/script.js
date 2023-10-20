var count = 0;
var turn = 0;
var fill = 0;
var firstTurn = true;
var winnerName = document.querySelector(".winner-name");
var startBtn = document.querySelector(".btn-div button");
var restartBtn = document.querySelector(".win-screen .video-game-button-end");
var titleScreen = document.querySelector(".title-screen");
var gamePanel = document.querySelector(".game-panel");
var turnHead = document.querySelector(".main h1");
var turnName = document.querySelector(".main h1 .player");
var winScreen = document.querySelector(".win-screen");
var panel = document.getElementsByClassName("game-panel");

var tl = gsap.timeline();

gsap.from(".title-screen .title, .win-screen h1", {
  y: 6,
  repeat: -1,
  yoyo: true,
  ease: "power1",
});

gsap.from(".player", {
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "linear",
});

startBtn.addEventListener("click", function () {
  turnHead.style.display = "flex";
  turnName.innerHTML = "O";
  randomTheme();

  tl.to(".title-screen", {
    x: -300,
    width: 0,
  });

  tl.to("titleScreen", {
    display: "none",
  });

  gsap.to(".win-screen", {
    y: "-100vh",
  })
});

panel[0].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[0].innerHTML = "O";
      panel[0].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[0].innerHTML = "O";
      panel[0].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[0].innerHTML = "X";
    panel[0].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[1].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[1].innerHTML = "O";
      panel[1].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[1].innerHTML = "O";
      panel[1].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[1].innerHTML = "X";
    panel[1].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[2].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[2].innerHTML = "O";
      panel[2].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[2].innerHTML = "O";
      panel[2].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[2].innerHTML = "X";
    panel[2].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[3].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[3].innerHTML = "O";
      panel[3].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[3].innerHTML = "O";
      panel[3].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[3].innerHTML = "X";
    panel[3].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[4].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[4].innerHTML = "O";
      panel[4].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[4].innerHTML = "O";
      panel[4].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[4].innerHTML = "X";
    panel[4].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[5].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[5].innerHTML = "O";
      panel[5].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[5].innerHTML = "O";
      panel[5].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[5].innerHTML = "X";
    panel[5].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[6].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[6].innerHTML = "O";
      panel[6].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[6].innerHTML = "O";
      panel[6].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[6].innerHTML = "X";
    panel[6].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[7].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[7].innerHTML = "O";
      panel[7].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[7].innerHTML = "O";
      panel[7].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[7].innerHTML = "X";
    panel[7].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

panel[8].addEventListener("click", () => {
  if (turn % 2 == 0) {
    if (firstTurn) {
      panel[8].innerHTML = "O";
      panel[8].style.pointerEvents = "none";
      firstTurn = false;
    } else {
      panel[8].innerHTML = "O";
      panel[8].style.pointerEvents = "none";

      if (!check()) {
        winnerName.innerHTML = "O";
        winScreen.style.display = "flex";
        gsap.to(".win-screen", {
          y: "0",
        });
      }
    }
    turnName.innerHTML = "X";
  } else {
    panel[8].innerHTML = "X";
    panel[8].style.pointerEvents = "none";

    if (!check()) {
      winnerName.innerHTML = "X";
      winScreen.style.display = "flex";
      gsap.to(".win-screen", {
        y: "0",
      });
    }

    turnName.innerHTML = "O";
  }
  turn++;
  count++;
});

restartBtn.addEventListener("click", () => {
  gsap.to(".win-screen", {
    y: "-100vh",
  });

  for (let i = 0; i < panel.length; i++) {
    panel[i].innerText = "";
    panel[i].style.pointerEvents = "all";
    firstTurn = true;
    count = 0;
    turn = 0;
    fill = 0;
  }
  turnName.innerText = "O";
});

function check() {
  if (
    (panel[0].innerText != "" &&
      panel[1].innerText != "" &&
      panel[2].innerText != "" &&
      panel[0].innerText == panel[1].innerText &&
      panel[1].innerText == panel[2].innerText) ||
    (panel[3].innerText != "" &&
      panel[4].innerText != "" &&
      panel[5].innerText != "" &&
      panel[3].innerText == panel[4].innerText &&
      panel[4].innerText == panel[5].innerText) ||
    (panel[6].innerText != "" &&
      panel[7].innerText != "" &&
      panel[8].innerText != "" &&
      panel[6].innerText == panel[7].innerText &&
      panel[7].innerText == panel[8].innerText) ||
    (panel[0].innerText != "" &&
      panel[3].innerText != "" &&
      panel[6].innerText != "" &&
      panel[0].innerText == panel[3].innerText &&
      panel[3].innerText == panel[6].innerText) ||
    (panel[1].innerText != "" &&
      panel[4].innerText != "" &&
      panel[7].innerText != "" &&
      panel[1].innerText == panel[4].innerText &&
      panel[4].innerText == panel[7].innerText) ||
    (panel[2].innerText != "" &&
      panel[5].innerText != "" &&
      panel[8].innerText != "" &&
      panel[2].innerText == panel[5].innerText &&
      panel[5].innerText == panel[8].innerText) ||
    (panel[0].innerText != "" &&
      panel[4].innerText != "" &&
      panel[8].innerText != "" &&
      panel[0].innerText == panel[4].innerText &&
      panel[4].innerText == panel[8].innerText) ||
    (panel[2].innerText != "" &&
      panel[4].innerText != "" &&
      panel[6].innerText != "" &&
      panel[2].innerText == panel[4].innerText &&
      panel[4].innerText == panel[6].innerText)
  ) {

    document.getElementById("win-msg").style.display = "block";
    document.getElementById("draw-msg").style.display = "none";
    if (window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById("win-msg").style.display = "flex";
    }

    return false;
  } else if (count == 8) {
    winScreen.style.display = "flex";
    document.getElementById("draw-msg").style.display = "block";
    document.getElementById("win-msg").style.display = "none";
    if (window.matchMedia("(max-width: 600px)").matches) {
      document.getElementById("draw-msg").style.display = "flex";
    }

  } else {
    return true;
  }
}

function randomTheme() {
  // random image picks a theme for the better user experience.
  let randomBackgroundImage = [
    "./backgrounds/cave.jpg",
    "./backgrounds/city.jpg",
    "./backgrounds/cliffside.jpg",
    "./backgrounds/cloudy-night.jpg",
    "./backgrounds/forest.jpg",
    "./backgrounds/outdoor.jpg",
    "./backgrounds/planets.jpg",
    "./backgrounds/Space-background.png",
    "./backgrounds/sunset.jpg",
    "./backgrounds/tree.jpg"

  ]

  // random number to get the random theme as desired
  let randomNumber = Math.floor(Math.random() * 10);

  // target the main container
  let targetMain = document.querySelector(".main");
  
  //set the random background image
  targetMain.style.backgroundImage = `url(${randomBackgroundImage[randomNumber]})`;
  //method for the entire layout of the game according to the main background color
  layoutColor(randomNumber);
}

// first targeting all the necessary points.
let targetGameContainer = document.querySelector(".game-container");
let targetGamePanel = Array.from(document.querySelectorAll(".game-panel"));

// layoutColor sets the layout color in the synchronous format to make the theme color ideal
function layoutColor(randomNumber) {
  if (randomNumber === 0) {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(133,162,194,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(133,162,194, 0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  } else if (randomNumber === 1) {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(255,189,163,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(255,189,163,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  } else if (randomNumber === 2) {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(110,166,191,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(110,166,191,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 3){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(6,18,52,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(6,18,52,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 4){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(251,196,106,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(251,196,106,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 5){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(37,107,203,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(37,107,203,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 6){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(71,56,113,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(71,56,113,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 8){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(0,0,0,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(0,0,0,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 8){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(179,24,126,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(179,24,126,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }else if(randomNumber === 9){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgba(40,55,76,0.2)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgba(40,55,76,0.8)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "white";
      });
    });
  }
}


// targeting the restart-button.
restartBtn.addEventListener("click", randomTheme);


