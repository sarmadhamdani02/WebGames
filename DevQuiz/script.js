
// declaring variables here
const startBtn = document.querySelector(".btn .start-btn");
// const startBt = document.getElementById('startBt');
const restartBtn = document.querySelector(".restart-btn");
const mainScreen = document.querySelector(".main-screen");
const question = document.querySelector(".question-panel h1");
const optionPanel = document.querySelector(".option-panel")
const options = document.getElementsByClassName("options");

// const optionA = document.querySelector(".option-a");
// const optionB = document.querySelector(".option-b");
// const optionC = document.querySelector(".option-c");
// const optionD = document.querySelector(".option-d");

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const currentQuestionElement = document.getElementById("current-question");

const scoreSection = document.querySelector(".score"); 
const gameScreen = document.querySelector(".game-screen");
const gameEndPanel = document.querySelector(".game-end-panel");
const gameScoreBox = document.querySelector(".score-box");
const totalScoreBox = document.querySelector(".total-score");
const percentBox = document.querySelector(".percent");
const remarkEmoji = document.querySelector(".remark-emoji");
const languageSelect = document.getElementById("language"); 


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
let selectedLanguage = null;

// questions
const questions = { 
    javascript: [
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
    "What is the difference between 'null' and 'undefined' in JavaScript?",
    "What does the NaN value represent in JavaScript?"
  ],
  python: [
    "What is the output of the following code: print(type([]))?",
    "Which of the following is a mutable data type?",
    "What is the correct way to create a function in Python?",
    "What will be the output of: 1 == True?",
    "Which module in Python is used for regular expressions?",
    "What is the default return value of a function in Python if no return statement is present?",
    "Which of the following is not a keyword in Python?",
    "How do you create a list in Python?",
    "What is the purpose of the pass statement in Python?",
    "Which operator is used for floor division in Python?",
    "How do you handle exceptions in Python?",
    "What is the output of the following code: print('Hello' * 3)?",
    "Which of the following is a built-in data type in Python?",
    "What is the difference between a list and a tuple in Python?",
    "What does the len() function do?",
    "Which method can be used to remove any whitespace from the beginning or end of a string?",
    "What is the output of 2 ** 3 in Python?",
    "Which of the following is used to define a block of code in Python?",
    "What is the purpose of the __init__ method in a class?",
    "How can you create a dictionary in Python?"
  ],
  java: [
    "What is the default value of a boolean variable in Java?",
    "Which of the following is not a Java primitive data type?",
    "What is the output of the following code: System.out.println(10 + 20 + '30');?",
    "Which keyword is used to create a class in Java?",
    "What is the correct way to declare a variable in Java?",
    "Which of the following is an interface in Java?",
    "What is the purpose of the 'static' keyword in Java?",
    "Which method is used to find the length of a string in Java?",
    "What does JVM stand for?",
    "Which of the following is a valid way to create an array in Java?",
    "What is the output of the following code: System.out.println(5 == 5.0);?",
    "Which exception is thrown when an array is accessed with an invalid index?",
    "What is the main entry point of a Java application?",
    "What is the output of the following code: String s = 'Hello'; s = s + ' World'; System.out.println(s);?",
    "Which keyword is used to inherit a class in Java?",
    "What is the purpose of the 'final' keyword in Java?",
    "Which of the following is a valid constructor in Java?",
    "What is the result of the following operation: 10 / 4 in Java?",
    "Which access modifier allows access only within the same package?",
    "What is the purpose of the 'this' keyword in Java?"
  ]
};

// Function to load questions based on selected language
function loadQuestions() {
    gameScreen.style.display = "block";
    const selectedLanguage = languageSelect.value; // Get the selected language
    questionsAsked = []; // Reset the questions asked
    questionIndex = 0; // Reset question index
    score = 0; // Reset score
    questionCount = 0; // Reset question count

questionArray = questions[selectedLanguage];
updateQuestionsArrayLengthElement(questionArray.length)
let totalScore = (questionArray.length)*10;
totalScoreBox.innerHTML = totalScore;
// Display the first question
displayQuestion(selectedLanguage);
}

// Function to display a question
function displayQuestion(language) {
    if (questionIndex >= questions[language].length) {
        showGameOverScreen(); // Function to show the end screen
        return;
    }
    questionArray = questions[language];
    console.log(questionIndex);
    const currentQuestion = questionArray[questionIndex]; // Get the current question
    
    question.innerHTML = currentQuestion; // Set the question text


//   options
const mcqOptions = {
    javascript: [
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
    ["'undefined' and 'null' can be used interchangeably", "'undefined' is an intentional absence of value, while 'null' indicates a variable that has been declared but not assigned a value", "'null' is an intentional absence of value, while 'undefined' indicates a variable that has been declared but not assigned a value", "'null' is the same as 'undefined'"],
    ["Not-a-Number", "Null", "Negative", "No value"]
    ],
    python: [
        ["list", "dict", "tuple", "set"],
        ["String", "Tuple", "List", "Integer"],
        ["def myFunction()", "function myFunction()", "create myFunction()", "define myFunction()"],
        ["True", "False", "1", "0"],
        ["re", "regex", "re_module", "reexp"],
        ["None", "0", "False", "Undefined"],
        ["goto", "eval", "assert", "raise"],
        ["myList = []", "myList = ()", "myList = {}", "myList = ''"],
        ["To do nothing", "To create a function", "To define a loop", "To exit the program"],
        ["//", "/", "**", "%%"],
        ["try/except", "if/else", "while", "for"],
        ["HelloHelloHello", "Hello3", "Hello 3", "3Hello"],
        ["List", "Set", "Dictionary", "Tuple"],
        ["Lists are mutable, tuples are immutable", "Lists are immutable, tuples are mutable", "Both are mutable", "Both are immutable"],
        ["Returns the length of a string", "Returns the length of a list", "Both A and B", "None of the above"],
        ["strip()", "remove()", "trim()", "clear()"],
        ["8", "6", "2", "3"],
        ["Indentation", "Curly braces", "Square brackets", "Parentheses"],
        ["To initialize attributes of a class", "To create a class", "To define a method", "To destroy a class"],
        ["myDict = {}", "myDict = []", "myDict = ()", "myDict = set()"]
    ],
    java: [
        ["true", "false", "0", "null"],
        ["int", "boolean", "char", "String"],
        ["1030", "30", "1020", "Error"],
        ["class", "create", "define", "function"],
        ["int x;", "int x = 5;", "x int;", "int x : 5;"],
        ["Runnable", "String", "ArrayList", "HashMap"],
        ["To define a constant", "To indicate a method can be called without an instance", "To restrict access", "To create a new thread"],
        ["length()", "size()", "getSize()", "getLength()"],
        ["Java Virtual Machine", "Java Variable Manager", "Java Visual Machine", "Java Version Manager"],
        ["int[] arr = new int[5];", "int arr[] = int[5];", "int arr = new int[5];", "arr = new int[5];"],
        ["true", "false", "Error", "0"],
        ["ArrayIndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException", "ArithmeticException"],
        ["public static void main(String[] args)", "static void main(String[] args)", "void main(String args)", "public void main(String[] args)"],
        ["Hello World", "HelloWorld", "Hello World!", "Error"],
        ["extends", "implements", "inherits", "includes"],
        ["To make a variable constant", "To prevent method overriding", "Both A and B", "None of the above"],
        ["MyClass()", "MyClass(int x)", "MyClass(int x, int y)", "All of the above"],
        ["2", "2.5", "3", "Error"],
        ["public", "protected", "private", "default"],
        ["To refer to the current object", "To call the parent constructor", "To refer to class variables", "To define a method"]
    ]
};
const currentOptions = mcqOptions[language][questionIndex];
console.log(currentOptions);

 // Get the current options
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = currentOptions[i]; // Set options text
    }
    console.log(options);
    

    questionCount++;
    // Increment question count and update score display if needed
    updateQuestionCountElement(questionCount);
}

//   answer key
const answerKeys = {
    javascript: [3, 1, 3, 3, 2, 2, 1, 3, 1, 2, 2, 2, 0, 0, 1, 0, 1, 0, 3, 2, 0],
    python: [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    java: [0, 3, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
};


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
    scorePercent = Math.trunc((score/totalScore) * (100));
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

// optionA.addEventListener("click", () => {
//     console.log("Option A clicked");
//     checkAnswer(0);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const optionA = document.querySelector(".option-a");
//     const optionB = document.querySelector(".option-b");
//     const optionC = document.querySelector(".option-c");
//     const optionD = document.querySelector(".option-d");

//     optionA.addEventListener("click", () => checkAnswer(0));
//     optionB.addEventListener("click", () => checkAnswer(1));
//     optionC.addEventListener("click", () => checkAnswer(2));
//     optionD.addEventListener("click", () => checkAnswer(3));
// });
optionA.addEventListener("click", () => {
    console.log("Option A clicked");
    checkAnswer(0);
});
optionB.addEventListener("click", () => {
    console.log("Option B clicked");
    checkAnswer(1);
});
optionC.addEventListener("click", () => {
    console.log("Option C clicked");
    checkAnswer(2);
});
optionD.addEventListener("click", () => {
    console.log("Option D clicked");
    checkAnswer(3);
});

function toggleOptionPanelClickEvents()
{
    //this prevent users from queueing the same timer multiple times by clickign on answers repeatedly
    optionPanelPointerEventEnabled = !optionPanelPointerEventEnabled;
    
    // optionPanel.style.pointerEvents = optionPanelPointerEventEnabled? "initial": "none";
}

// Update question tracker
function updateQuestionTracker() {
    const totalQuestions = questionArray.length;
    const currentQuestion = questionCount; // questionCount already tracks the current question number
    const tracker = document.querySelector('.question-count');
    
    // Update the text to show the current question and total questions
    tracker.innerHTML = `Question: ${currentQuestion}/${totalQuestions}`;
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
        // Update the question tracker
        console.log(questionCount);
        
        
        currentQuestionElement.innerHTML = questionCount;

        //this is what determines when the game is finished
        if (questionCount > questionArray.length -1) showGameOverScreen(); 
        calculateTheFinalScore();        
    }else{        
        updateQuestionsAskedElement(questionsAsked.length);
    }     
}

// Function to handle answer selection
function checkAnswer(selectedOptionIndex) {
    console.log("checkAnswer");

    if (!optionPanelPointerEventEnabled) return; // Prevent multiple selections
    optionPanelPointerEventEnabled = false; // Disable further clicks

    // Assuming answerKeys is an array or object mapping correct answers
    const selectedAnswer = answerKeys[languageSelect.value][questionIndex]; // Get correct answer

    if (selectedOptionIndex === selectedAnswer) {
        score += 10; // Increment score
        remarkEmoji.innerHTML = "🎉"; // Display correct emoji
    } else {
        remarkEmoji.innerHTML = "❌"; // Display incorrect emoji
    }

    // Remove the click listeners for options after answering
    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener('click', () => checkAnswer(i));
    }

    setTimeout(() => {
        optionPanelPointerEventEnabled = true; // Enable clicks after a delay
        questionIndex++; // Move to next question
        displayQuestion(languageSelect.value); // Show next question
    }, 500); // Delay before showing next question
}


// change theme color
function selectTheme() {
    let themeIndex = Math.floor(Math.random()*themeColorArray.length);
    let themeColor = themeColorArray[themeIndex];
    gameScreen.style.backgroundColor = themeColor;
}

function exitQuiz(){
    alert("Are you sure you want to exit the quiz?");
    document.querySelector('.game-screen').style.display= 'none';
    document.querySelector('.main-screen').style.display= 'flex';
    document.querySelector('.exit-btn').style.display= 'none';
}

function startQuiz(){
    document.querySelector('.main-screen').style.display='none';  // Hide the main screen
    document.querySelector('.game-screen').style.display='flex';  // Show the game screen
    document.querySelector('.exit-btn').style.display='block';  // Show the exit button
    toggleOptionPanelClickEvents();
    console.log(language.value)
    loadQuestions();
}

if (selectedLanguage) {
    startQuiz();
} else {
    alert("Please select a programming language before starting the quiz.");
}


// Event listener for starting the quiz
startBtn.addEventListener("click", function() {
    console.log("Start button clicked!");  // Check if this is logged
    startQuiz();  // Start the quiz
});

// startBt.addEventListener("click", function() {
//     console.log("Start button clicked!");  // Check if this is logged
//     startQuiz();  // Start the quiz

// });


// Add event listener for the restart button if applicable
restartBtn.addEventListener("click", () => {
    location.reload(); // Restart the game
});


// Make sure to set initial display settings for the game screen and main screen
gameScreen.style.display = "none"; // Hide game screen initially
gameEndPanel.style.display = "none"; // Hide end panel initially

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

function handleAnswer(selectedOption) {
    const selectedAnswer = Array.from(options).indexOf(selectedOption);
    const correctAnswer = answerKeys[languageSelect.value][questionIndex];

    if (selectedAnswer === correctAnswer) {
        score += 10; // Increment score for a correct answer
    }
    questionCount++; // Increment question count
    questionIndex++; // Move to the next question

    if (questionIndex < totalQuestions) { // Ensure there are more questions
        displayQuestion(languageSelect.value); // Display the next question
    } else {
        showGameOverScreen(); // If no more questions, show game over screen
    }
}


// read instruction button on main screen functionality
readInstructionBtn.addEventListener("click", () => {
    instructionPanel.style.display = "flex";
});

instExitBtn.addEventListener("click", () => {
    instructionPanel.style.display = "none";
});

function showGameOverScreen() {
    gameEndPanel.style.display = 'block'; // Show end screen
    totalScoreBox.innerHTML = `Your Score: ${score}`;
  }

// gameFunction();


