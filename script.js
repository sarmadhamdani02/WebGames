let toggleSwitch = document.getElementById("toggle");
let toggleSideSwitch = document.getElementById("dark-mode-toggle-sidebar");
const mainContent = document.getElementsByClassName("main-content");
const navBar = document.getElementsByClassName("nav-bar");
const gameText = document.getElementsByClassName("game-text");
const navItem = document.getElementsByClassName("nav-item");
const gameIcon = document.getElementsByClassName("game");

const onToggleDarkMode = () => {
  if (toggleSwitch.checked == true) {
    mainContent[0].style.backgroundColor = "#15202B";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#E4E6EB";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#22303C");
    }

    navBar[0].style.backgroundColor = "#03DAC5";
    navBar[0].style.color = "#212628";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#212628";
    }
  }
  else {
    mainContent[0].style.backgroundColor = "white";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#333333";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#dedede");
    }

    navBar[0].style.backgroundColor = "#009090";
    navBar[0].style.color = "white";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
  }
}

const onSideToggleDarkMode = () => {
  if (toggleSideSwitch.checked == true) {
    mainContent[0].style.backgroundColor = "#15202B";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#E4E6EB";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#22303C");
    }

    navBar[0].style.backgroundColor = "#03DAC5";
    navBar[0].style.color = "#212628";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "#212628";
    }
  }
  else {
    mainContent[0].style.backgroundColor = "white";
    for (let i = 0; i < gameText.length; i++) {
      gameText[i].style.color = "#333333";
    }
    for (let i = 0; i < gameIcon.length; i++) {
      gameIcon[i].style.setProperty("--game-icon-hover-color", "#dedede");
    }

    navBar[0].style.backgroundColor = "#009090";
    navBar[0].style.color = "white";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
  }
}

const toggleSideBar = () => {
  const sideBar = document.getElementById("side-bar-menu");
  const currentWidth = sideBar.style.width;
  if (currentWidth === "250px") {
    sideBar.style.width = "0";
  } else {
    sideBar.style.width = "250px"
  }
}

