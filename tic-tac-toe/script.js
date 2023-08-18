var count = 0;
var turn = 0;
var fill = 0;
var firstTurn = true;
var winnerName = document.querySelector(".winner-name");
var startBtn = document.querySelector(".btn-div button");
var restartBtn = document.querySelector(".win-screen .btn");
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

  tl.to(".title-screen", {
    x: -300,
    width: 0,
  });

  tl.to("titleScreen", {
    display: "none",
  });
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
    document.getElementById("win-msg").hidden = false;
    document.getElementById("draw-msg").hidden = true;
    return false;
  } else if (count == 8) {
    winScreen.style.display = "flex";
    document.getElementById("draw-msg").hidden = false;
    document.getElementById("win-msg").hidden = true;
  } else {
    return true;
  }
}

function randomColor() {
  // random color for the better user experience.
  let randomBackgroundColor = [
    "#474E68",
    "lightCoral",
    "#8D72E1",
    "rgb(95, 135, 255)",
  ];

  // random number to get the random color as desired
  let randomNumber = Math.floor(Math.random() * 4);

  // target the main container
  let targetMain = document.querySelector(".main");

  targetMain.style.backgroundColor = randomBackgroundColor[randomNumber];

  //method for the entire layout of the game according to the main background color
  layoutColor(targetMain.style.backgroundColor);
}

// first targeting all the necessary points.
let targetGameContainer = document.querySelector(".game-container");
let targetGamePanel = Array.from(document.querySelectorAll(".game-panel"));

// layoutColor sets the layout color in the synchronous format to make the theme color ideal
function layoutColor(backgroundColor) {
  console.log(backgroundColor);
  if (backgroundColor === "rgb(71, 78, 104)") {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "#61678A";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "#252B48";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "#EADBC8";
      });
    });
  } else if (backgroundColor === "lightcoral") {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "#E48586";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "#FCBAAD";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "#EADBC8";
      });
    });
  } else if (backgroundColor === "rgb(141, 114, 225)") {
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "#A66CFF";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "#C9A7EB";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "#EADBC8";
      });
    });
  }else if(backgroundColor === "rgb(95, 135, 255)"){
    // targeting the game container tag.
    targetGameContainer.style.backgroundColor = "rgb(65, 105, 225)";

    targetGamePanel.forEach(function (elem) {
      elem.style.borderColor = "white";
    });
    // targeting the individual box for hover
    targetGamePanel.forEach((elem) => {
      elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "rgb(28, 78, 228)";
      });

      elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "";
      });
    });

    targetGamePanel.forEach(function (elem) {
      elem.addEventListener("click", () => {
        elem.style.webkitTextStrokeColor = "#EADBC8";
      });
    });
  }
}

// targeting the restart-button.
restartBtn.addEventListener("click", randomColor);


