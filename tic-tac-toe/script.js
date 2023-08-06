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

gsap.from(".title-screen .title, .win-screen h1 ",{
    y : 6,
    repeat:-1,
    yoyo:true,
    ease:"power1"
})

gsap.from(".player",{
    
    repeat:-1,
    yoyo:true,
    duration:2,
    ease:"linear"
})

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
    console.log("same");
    return false;
  } else if (count == 8) {
    winScreen.style.display = "flex";
    document.querySelector(".win-screen h1").style.color = "yellow";
    document.querySelector(".win-screen h1").innerText = "Game Drawn";
  } else {
    console.log("not");
    return true;
  }
}
