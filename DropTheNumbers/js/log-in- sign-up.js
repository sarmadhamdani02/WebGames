// try try try
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let signForm = document.getElementById("sign");
signForm.addEventListener("submit", addUser);

function addUser(event) {
  event.preventDefault();
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;
  let mail = document.querySelector("#email1").value;
  let password = document.querySelector("#password1").value;
  let phone = document.querySelector("#phone").value;
  let age = document.querySelector("#age").value;
  isValid = isNotEmpty(firstName) && isNotEmpty(lastName) && ValidateEmail(mail) && CheckPassword(password) && isNotEmpty(password) && isNotEmpty(phone) && isNotEmpty(age);
  let isNew = isNotExist(mail);
  if (isValid && isNew) {
    let user = {
      firstname: firstName,
      lastname: lastName,
      mail: mail,
      password: password,
      phone: phone,
      age: age,
      maxScore: 0,
    };
    localStorage.setItem(mail, JSON.stringify(user));
    container.classList.remove("right-panel-active");
  }
  else {
    if (isValid)
      alert("User Is Allredy Exist :(");
    else
      alert("You Didnt Insert Values");
  }
}


function isNotEmpty(inputText) {
  if (inputText === "")
    return false;
  return true;
}

function isNotExist(inputText) {
  let user = localStorage.getItem(inputText);
  if (user === null)
    return true;
  return false;
}


function ValidateEmail(inputText) {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (regex.test(inputText))
    return true;
  else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function CheckPassword(inputText) {
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (inputText.match(passw)) {
    return true;
  }
  else {
    alert('please enter password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter');
    return false;
  }
}


let logForm = document.getElementById("log");
logForm.addEventListener('submit', linkThePage);

function linkThePage() {

  let mail = document.querySelector("#email2").value;
  let password = document.querySelector("#password2").value;
  let storageUser = JSON.parse(localStorage.getItem(mail));

  if (storageUser === null || storageUser.password != password)
    alert("user name or password is not correct!");
  else {
    localStorage.setItem("currentUser", mail);
    localStorage.setItem("isConnected", true);
    let candyCrush = localStorage.getItem("candyCrush");
    if (candyCrush === "true") {
      window.open("../html/game.html", "_self");
      localStorage.setItem("candyCrush", false);
    }
    let dropNumbers = localStorage.getItem("dropTheNumber");
    if (dropNumbers === "true") {
      window.open("../html/game.html");
      localStorage.setItem("dropTheNumber", false);
    }
    let marioKart = localStorage.getItem("marioKart");
    if (marioKart === "true") {
      window.open("../html/game.html", "_self");
      localStorage.setItem("marioKart", false);
    }
    let pixelSurvive = localStorage.getItem("pixelSurvive");
    if (localStorage.getItem("pixelSurvive") === "true") {
      window.open("https://gameforge.com/en-US/littlegames/pixel-survival/#", "_self");
      localStorage.setItem("pixelSurvive", false);
    }
  }
}
