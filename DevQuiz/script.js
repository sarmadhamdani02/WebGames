
// declaring variables here
const startBtn = document.querySelector(".btn .start-btn");
const restartBtn = document.querySelector(".restart-btn");
const mainScreen = document.querySelector(".main-screen");
const question = document.querySelector(".question-panel h1");
const optionPanel = document.querySelector(".option-panel")
const options = document.getElementsByClassName("options");
const optionA = document.querySelector(".option-a");
const optionB = document.querySelector(".option-b");
const optionC = document.querySelector(".option-c");
const optionD = document.querySelector(".option-d");
const scoreSection = document.querySelector(".score"); 
const gameScreen = document.querySelector(".game-screen");
const gameEndPanel = document.querySelector(".game-end-panel");
const gameScoreBox = document.querySelector(".score-box");
const totalScoreBox = document.querySelector(".total-score");
const percentBox = document.querySelector(".percent");
const remarkEmoji = document.querySelector(".remark-emoji");

//debugging variables and functions start
const questionCountElement = document.querySelector(".question-count");
const questionsAskedElement = document.querySelector(".questions-asked-array");
const questionArrayLengthElement = document.querySelector(".questions-array-length");
let optionPanelPointerEventEnabled = true;

function print(msg)
{
    console.log(msg);
}
function updateQuestionCountElement(count){
    //this function is for debugging purposes only
    questionCountElement.innerHTML = `question count: ${count}`;
}
function updateQuestionsArrayLengthElement(length)
{
    //this function is for debugging purposes only
    questionArrayLengthElement.innerHTML = `question array length: ${length} `
}
function updateQuestionsAskedElement(length)
{
    //this function is for debugging purposes only
    questionsAskedElement.innerHTML = `questions asked length : ${length} `
}
//debugging variables and functions end here

const readInstructionBtn = document.querySelector(".read-instruction");
const instructionPanel = document.querySelector(".game-instructions");
const instExitBtn = document.querySelector(".close-btn");


let questionIndex = 0;

let questionsAsked = []; //all the asked questions will be entered in this array so they will never repeat.
let score = 0,
    scorePercent = 0,
    questionCount = 0;
updateQuestionCountElement(questionCount);

// questions
const questionArray = [
    "What does HTML stand for?",
    "Which of the following is not a JavaScript data type?",
    "What is the result of 2 + '2' in JavaScript?",
    "What keyword is used to declare a variable in JavaScript?",
    "Which built-in method adds one or more elements to the end of an array and returns the new length?",
    "What does CSS stand for?",
    "Which operator is used for equality comparison without type coercion in JavaScript?",
    "What does API stand for?",
    "What is the purpose of the 'use strict' directive in JavaScript?",
    "Which function is used to parse a JSON string?",
    "What is the main purpose of a constructor function in JavaScript?",
    "Which method is used to remove the last element from an array in JavaScript?",
    "What is the default behavior of the event.preventDefault() method?",
    "Which keyword is used to declare a constant variable in JavaScript?",
    "What is the purpose of a callback function in JavaScript?",
    "Which global function is used to convert a string to an integer?",
    "What does the acronym CRUD stand for in the context of databases?",
    "What is the significance of the 'this' keyword in JavaScript?",
    "Which method is used to schedule a function to run after a certain delay?",
    "What is the difference between 'null' and 'undefined' in JavaScript?"
  ];
  
  updateQuestionsArrayLengthElement(questionArray.length)
let totalScore = (questionArray.length)*10;
totalScoreBox.innerHTML = totalScore;


//   options

const mcqArray = [
    ["High Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Transfer Markup Language", "Hyper Text Markup Language"],
    ["Boolean", "Alert", "Number", "String"],
    ["Error", "4", "NaN", "22"],
    ["int", "string", "variable", "var"],
    ["addToEnd()", "concat()", "push()", "append()"],
    ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    ["!==", "===", "==", "="],
    ["Advanced Programming Interface", "Automated Programming Interface", "Application Protocol Interface", "Application Programming Interface"],
    ["Declares a variable", "Enforces stricter parsing and error handling", "Defines a function", "Includes an external script"],
    ["JSON.stringify()", "JSON.serialize()", "JSON.parse()", "JSON.decode()"],
    ["Memory management", "DOM manipulation", "Creating objects", "Error handling"],
    ["shift()", "remove()", "pop()", "delete()"],
    ["Cancels the default behavior of an element", "Prevents the event from bubbling up the DOM tree", "Stops the event propagation", "Prevents the event from capturing"],
    ["const", "let", "constant", "var"],
    ["Handling errors", "Passing a function as an argument to another function", "Executing an asynchronous operation", "Passing data to another domain"],
    ["parseInt()", "toInteger()", "convertToInt()", "stringToInt()"],
    ["Compile, Run, Upload, Debug", "Update, Read, Create, Delete", "Control, Repeat, Undo, Draw", "Copy, Resize, Underline, Delete"],
    ["It refers to the previous function's scope", "It refers to the current function's scope", "It refers to the parent element's scope", "It refers to the global scope"],
    ["setInterval()", "wait()", "delay()", "setTimeout()"],
    ["'undefined' and 'null' can be used interchangeably", "'undefined' is an intentional absence of value, while 'null' indicates a variable that has been declared but not assigned a value", "'null' is an intentional absence of value, while 'undefined' indicates a variable that has been declared but not assigned a value", "'null' is the same as 'undefined'"]
];

//   answer key
const key = [3, 1, 0, 3, 2, 2, 1, 3, 1, 2, 0, 0, 2, 0, 1, 0, 1, 0, 3, 2];


//   array contains the background colors
const themeColorArray = [
"rgb(89, 14, 89)",
"rgb(89, 14, 15)",
"rgb(24, 14, 89)",
"rgb(14, 87, 89)",
"rgb(14, 89, 57)",
"rgb(27, 89, 14)",
"rgb(89, 53, 14)",
"rgb(112, 20, 143)",
"rgb(143, 20, 120)",
"rgb(20, 143, 63)"
];



// application logic
selectTheme();
function showGameOverScreen()
{
    gameEndPanel.style.display = "flex";
    gameScoreBox.innerHTML = `${score}`;
    scorePercent = ((score/totalScore) * (100));
    percentBox.innerHTML = `( ${scorePercent}% )`; 
}
function calculateTheFinalScore()
{
    
    if (scorePercent >= 80) {
        remarkEmoji.innerHTML = "🤩";
        percentBox.style.color = "limegreen";
    } else if (scorePercent >= 70 && scorePercent < 80) {
        remarkEmoji.innerHTML = "🥳";
        percentBox.style.color = "lime";

    } else if (scorePercent >= 60 && scorePercent < 70) {
        remarkEmoji.innerHTML = "👏"; // Change this emoji

    } else if (scorePercent >= 50 && scorePercent < 60) {
        remarkEmoji.innerHTML = "👍";
        percentBox.style.color = "yeelow";
        
    } else if (scorePercent < 50 && scorePercent > 39) {
        remarkEmoji.innerHTML = "😕";
        percentBox.style.color = "crimson";

    } 
    if (scorePercent <= 39 && scorePercent > 0) {
        remarkEmoji.innerHTML = "😳";
        percentBox.style.color = "crimson";

    }
    else if (scorePercent === 0) {
        remarkEmoji.innerHTML = "🤐";
        percentBox.style.color = "crimson";

    } else if (scorePercent === 100) {
        remarkEmoji.innerHTML = "💯";
        percentBox.style.color = "lightgreen";

    }
}
function gameFunction() {
    changeQuestion();
    optionA.addEventListener("click", () => checkAnswer(0));
    optionB.addEventListener("click", () => checkAnswer(1));
    optionC.addEventListener("click", () => checkAnswer(2));
    optionD.addEventListener("click", () => checkAnswer(3));

}
function toggleOptionPanelClickEvents()
{
    //this prevent users from queueing the same timer multiple times by clickign on answers repeatedly
    optionPanelPointerEventEnabled = !optionPanelPointerEventEnabled;
    
    optionPanel.style.pointerEvents = optionPanelPointerEventEnabled? "initial": "none";
}

// function will change questions and options
function changeQuestion() {
    optionA.classList.remove("right-option", "wrong-option");
    optionB.classList.remove("right-option", "wrong-option");
    optionC.classList.remove("right-option", "wrong-option");
    optionD.classList.remove("right-option", "wrong-option");
    toggleOptionPanelClickEvents();
    questionIndex = Math.floor(Math.random()*questionArray.length);
    
    if(questionsAsked.length < questionArray.length )
    {        
        while(questionsAsked.includes(questionIndex))
        {
            questionIndex = Math.floor(Math.random()*questionArray.length);
        }
        
        questionsAsked.push(questionIndex);
        updateQuestionsAskedElement(questionsAsked.length)
        question.innerHTML = questionArray[questionIndex]; //change question text
        // change option text
        optionA.innerHTML = mcqArray[questionIndex][0];
        optionB.innerHTML = mcqArray[questionIndex][1];
        optionC.innerHTML = mcqArray[questionIndex][2];
        optionD.innerHTML = mcqArray[questionIndex][3];

        questionCount++;
        
        updateQuestionCountElement(questionCount);
        //this is what determines when the game is finished
        if (questionCount > questionArray.length -1) showGameOverScreen(); 
        calculateTheFinalScore();        
    }else{        
        updateQuestionsAskedElement(questionsAsked.length);
    }     
}

// function will check whether the answer selected by user is right or not.
function checkAnswer(userIndex) {
    // make the right answer green
    toggleOptionPanelClickEvents();
    switch(key[questionIndex])
    {
        case 0: optionA.classList.add("right-option"); break;
        case 1: optionB.classList.add("right-option"); break;
        case 2: optionC.classList.add("right-option"); break;            
        case 3: optionD.classList.add("right-option"); break;           
    }    
    const waitTimeBeforeTheNextQuestion = 500;
    //if anser is correct
    if (key[questionIndex] === userIndex) {
        score+=10;
        scoreSection.innerHTML = score;
        setTimeout(function(){
            changeQuestion();
        },waitTimeBeforeTheNextQuestion);
    }
    else{ //if answer is not correct
        
        if (userIndex === 0) {
            optionA.classList.add("wrong-option");
        }
        else if (userIndex === 1) {
            optionB.classList.add("wrong-option");
        }
        else if (userIndex === 2) {
            optionC.classList.add("wrong-option");
        }
        else if (userIndex === 3) {
            optionD.classList.add("wrong-option");
        }
        setTimeout(function(){
            changeQuestion();
        },waitTimeBeforeTheNextQuestion); 
    }
}

// change theme color
function selectTheme() {
    let themeIndex = Math.floor(Math.random()*themeColorArray.length);
    let themeColor = themeColorArray[themeIndex];
    gameScreen.style.backgroundColor = themeColor;
}


// click start button on menu screen to perform
startBtn.addEventListener("click",() => {
    mainScreen.style.display = "none";
    toggleOptionPanelClickEvents();
});

// click on restart button to restart game
restartBtn.addEventListener("click", () => {
    // gameFunction();
    selectTheme();
    score = 0;
    questionCount = 0;
    updateQuestionCountElement(questionCount);
    questionsAsked.length = 0;
    updateQuestionsAskedElement(questionsAsked.length)
    scoreSection.innerHTML = score;
    gameEndPanel.style.display = "none";
});

// read instruction button on main screen functionality
readInstructionBtn.addEventListener("click", () => {
    instructionPanel.style.display = "flex";
});

instExitBtn.addEventListener("click", () => {
    instructionPanel.style.display = "none";
});

gameFunction();


