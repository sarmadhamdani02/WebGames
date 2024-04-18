let candyCrush = document.getElementById("candyCrush");
localStorage.setItem("candyCrush", false);
let dropTheNumber = document.getElementById("dropTheNumber");
localStorage.setItem("dropTheNumber", false);
let marioKart = document.getElementById("marioKart");
localStorage.setItem("marioKart", false);
let pixelSurvive = document.getElementById("pixelSurvive");
localStorage.setItem("pixelSurvive", false);

candyCrush.addEventListener('click', () => {
    localStorage.candyCrush = true;
    openFile("candyCrush");

});

dropTheNumber.addEventListener('click', () => {
    localStorage.dropTheNumber = true;
    openFile("dropTheNumber");
});

marioKart.addEventListener('click', () => {
    localStorage.marioKart = true;
    openFile("marioKart");

});

pixelSurvive.addEventListener('click', () => {
    localStorage.pixelSurvive = true;
    openFile("pixelSurvive");

});


function openFile(game) {
    if (localStorage.getItem("isConnected") === "true") {
        switch (game) {
            case "candyCrush":
                window.open("https://play.google.com/store/apps/details?id=com.king.candycrushsaga&hl=en_US");
                break;
            case "dropTheNumber":
                window.open("../html/game.html", "_self");
                break;
            case "marioKart":
                window.open("../html/game.html", "_self");
                break;
            case "pixelSurvive":
                window.open("../html/game.html", "_self");
                break;
        }
    }
    else
        open("../html/log-in- sign-up.html", "_self");
}


let exit = document.getElementById("exit");
exit.addEventListener("click", () => {
    localStorage.setItem("currentUser", " ");
    localStorage.setItem("isConnected", false);
});
