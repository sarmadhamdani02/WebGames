
var turn = 0;
var fill = 0;
var firstTurn = true;
var winnerName = document.querySelector(".winner-name");
var startBtn = document.querySelector(".btn-div button");
var titleScreen = document.querySelector(".title-screen");
var gamePanel = document.querySelector(".game-panel");
var turnHead = document.querySelector(".main h1");
var turnName = document.querySelector(".main h1 .player");
var winScreen = document.querySelector(".win-screen");
var panel = document.getElementsByClassName("game-panel");

var tl = gsap.timeline();

startBtn.addEventListener("click", function(){

    turnHead.style.display = "flex";
    turnName.innerHTML = "O";

    tl.to(".title-screen",{
        x:-300,
        width:0
    })

    tl.to("titleScreen",{
        display:"none"
    });

});

panel[0].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[0].innerHTML = "O";
            panel[0].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[0].innerHTML = "O";
                panel[0].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[0].innerHTML = "X";
            panel[0].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[1].addEventListener("click",() => {

    if (turn % 1 == 0) {
        if (firstTurn) {
            panel[1].innerHTML = "O";
            panel[1].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[1].innerHTML = "O";
                panel[1].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[1].innerHTML = "X";
            panel[1].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[2].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[2].innerHTML = "O";
            panel[2].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[2].innerHTML = "O";
                panel[2].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[2].innerHTML = "X";
            panel[2].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[3].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[3].innerHTML = "O";
            panel[3].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[3].innerHTML = "O";
                panel[3].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[3].innerHTML = "X";
            panel[3].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[4].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[4].innerHTML = "O";
            panel[4].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[4].innerHTML = "O";
                panel[4].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[4].innerHTML = "X";
            panel[4].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[5].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[5].innerHTML = "O";
            panel[5].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[5].innerHTML = "O";
                panel[5].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[5].innerHTML = "X";
            panel[5].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[6].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[6].innerHTML = "O";
            panel[6].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[6].innerHTML = "O";
                panel[6].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[6].innerHTML = "X";
            panel[6].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[7].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[7].innerHTML = "O";
            panel[7].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[7].innerHTML = "O";
                panel[7].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[7].innerHTML = "X";
            panel[7].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});

panel[8].addEventListener("click",() => {

    if (turn % 2 == 0) {
        if (firstTurn) {
            panel[8].innerHTML = "O";
            panel[8].style.pointerEvents = "none";
            firstTurn = false;
        }
        else{
            if (check()) {
                panel[8].innerHTML = "O";
                panel[8].style.pointerEvents = "none";
                
            }
            else{
                winnerName.innerHTML = "X";
                winScreen.style.display = "flex";
            }
        }
        turnName.innerHTML = "X";
        
    }
    else{
        if (check()) {
            panel[8].innerHTML = "X";
            panel[8].style.pointerEvents = "none";
            
        }
        else{
            winnerName.innerHTML = "O";
            winScreen.style.display = "flex"
        }
        
        turnName.innerHTML = "O";
    }
    turn++;

});



function check() {
    if (
        (panel[0].innerText != "" && panel[1].innerText != "" && panel[2].innerText != "" &&
        panel[0].innerText == panel[1].innerText && panel[1].innerText == panel[2].innerText) ||
        (panel[3].innerText != "" && panel[4].innerText != "" && panel[5].innerText != "" &&
        panel[3].innerText == panel[4].innerText && panel[4].innerText == panel[5].innerText) ||
        (panel[6].innerText != "" && panel[7].innerText != "" && panel[8].innerText != "" &&
        panel[6].innerText == panel[7].innerText && panel[7].innerText == panel[8].innerText) ||
        (panel[0].innerText != "" && panel[3].innerText != "" && panel[6].innerText != "" &&
        panel[0].innerText == panel[3].innerText && panel[3].innerText == panel[6].innerText) ||
        (panel[1].innerText != "" && panel[4].innerText != "" && panel[7].innerText != "" &&
        panel[1].innerText == panel[4].innerText && panel[4].innerText == panel[7].innerText) ||
        (panel[2].innerText != "" && panel[5].innerText != "" && panel[8].innerText != "" &&
        panel[2].innerText == panel[5].innerText && panel[5].innerText == panel[8].innerText) ||
        (panel[0].innerText != "" && panel[4].innerText != "" && panel[8].innerText != "" &&
        panel[0].innerText == panel[4].innerText && panel[4].innerText == panel[8].innerText) ||
        panel[2].innerText != "" && panel[4].innerText != "" && panel[6].innerText != "" &&
        panel[2].innerText == panel[4].innerText && panel[4].innerText == panel[6].innerText) 

    {
        console.log("same");
    return false;
    } 
    else {
        console.log("not");
        return true;
    }
}
