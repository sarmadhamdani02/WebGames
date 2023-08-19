let toggleSwitch = document.getElementById("toggle");
const mainContent = document.getElementsByClassName("main-content");
const navBar = document.getElementsByClassName("nav-bar");
const gameText = document.getElementsByClassName("game-text");
const navItem = document.getElementsByClassName("nav-item");

const onToggleDarkMode = () => {
  if(toggleSwitch.checked == true) {
    mainContent[0].style.backgroundColor = "#121212";
    for(let i = 0; i < gameText.length; i++) {
        gameText[i].style.color = "white";
    }

    navBar[0].style.backgroundColor = "yellow";
    navBar[0].style.color = "black";
    for(let i = 0; i < navItem.length; i++) {
        navItem[i].style.color = "black";
    }
  }
  else {
    mainContent[0].style.backgroundColor = "white";
    for(let i = 0; i < gameText.length; i++) {
        gameText[i].style.color = "#333333";
    }

    navBar[0].style.backgroundColor = "#009090";
    navBar[0].style.color = "white";
    for(let i = 0; i < navItem.length; i++) {
        navItem[i].style.color = "white";
    }
  }
}