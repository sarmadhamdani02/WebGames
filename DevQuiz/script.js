// declaring variables here
const startBtn = document.querySelector(".btn .start-btn");
const restartBtn = document.querySelector(".restart-btn");
const mainScreen = document.querySelector(".main-screen");
const question = document.querySelector(".question-panel h3");
const optionPanel = document.querySelector(".option-panel");
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
const instruction = document.querySelector(".instruction-panel");

// language selector
const languageSelect = document.getElementById("language");

//question tracker variables
const questionCountElement = document.querySelector(".question-count");
const questionsAskedElement = document.querySelector(".questions-asked-array");
const questionArrayLengthElement = document.querySelector(".questions-array-length");

function updateQuestionCountElement(count){
    //this function is for debugging purposes only
    questionCountElement.innerHTML = `question count: ${count}`;
}

function updateQuestionsArrayLengthElement(length)
{
    //this function is for debugging purposes only
    questionArrayLengthElement.innerHTML = `question array length: ${length} `
}

const readInstructionBtn = document.querySelector(".read-instruction");
const instructionPanel = document.querySelector(".game-instructions");
const instExitBtn1 = document.querySelector(".close-btn1");
const instExitBtn2 = document.querySelector(".close-btn2");

let questionIndex = 0;
let questionsAsked = []; // to store asked questions
let score = 0,
    questionCount = 0;
updateQuestionCountElement(questionCount);

// Questions and MCQs for all languages
const quizzes = {
    javascript: {
        questions: [
            "What is the result of 2 + '2' in JavaScript?",
            "Which of the following is not a JavaScript data type?",
            "Which company developed JavaScript?",
            "What type of language is JavaScript?",
            "Inside which HTML element do we put the JavaScript?",
            "What keyword is used to declare a variable in JavaScript?",
            "Which built-in method adds one or more elements to the end of an array and returns the new length?",
            "What is the main purpose of a constructor function in JavaScript?",
            "Which method is used to remove the last element from an array in JavaScript?",
            "What is the significance of the 'this' keyword in JavaScript?"

        ],
        options: [
            ["Error", "4", "NaN", "22"],
            ["Boolean", "Alert", "Number", "String"],
            ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
            ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
            ["<js>", "<scripting>", "<script>", "<javascript>"],
            ["int", "string", "variable", "var"],
            ["addToEnd()", "concat()", "push()", "append()"],
            ["Memory management", "DOM manipulation", "Creating objects", "Error handling"],
            ["shift()", "remove()", "pop()", "delete()"],
            ["It refers to the previous function's scope", "It refers to the current function's scope", "It refers to the parent element's scope", "It refers to the global scope"],
        ],
        answers: [3, 1, 0, 1, 2, 3, 2, 2, 2, 0] // correct answers for JavaScript
    },
    python: {
        questions: [
            "What is the correct file extension for Python files?",
            "Which of the following is used to define a block of code in Python?",
            "What is the maximum possible length of an identifier in Python?",
            "Which of the following is a mutable data type in Python?",
            "What does pip stand for in Python?",
            "What is the output of print(type([]) == list)?",
            "Which of the following functions is used to get the length of a list in Python?",
            "What is the output of print(2 ** 3 ** 2)?",
            "Which of the following keywords is used to define a function in Python?",
            "Which of the following is not a valid keyword in Python?"
        ],
        options: [
            [".pyt", ".pyth", ".py", ".pt"],
            ["Brackets", "Indentation", "Parentheses", "Semicolons"],
            ["16", "32", "128", "No fixed length is specified"],
            ["List", "Tuple", "String", "Integer"],
            ["Pip Installs Packages", "Pip Installs Python", "Preferred Installer Program", "All of the above"],
            ["False", "True", "List", "None"],
            ["length(list)", "count(list)", "size(list)", "len(list)"],
            ["64", "256", "512", "8"],
            ["def", "func", "define", "function"],
            ["pass", "assert", "repeat", "yield"]
        ],
        answers: [2, 1, 3, 0, 3, 1, 3, 2, 0, 2] // correct answers for Python
    },
    java: {
        questions: [
            "What is the size of an int data type in Java?",
            "Which keyword is used to create an object in Java?",
            "Which of these is a Java feature?",
            "Which method can be defined only once in a program?",
            "Which package contains the Random class?",
            "Which of these is not a primitive data type in Java?",
            "Which of the following methods is used to find the length of a string in Java?",
            "Which of these access modifiers makes a variable accessible only within the same class?",
            "Which keyword is used to inherit a class in Java?",
            "Which of these statements is used to terminate a loop in Java?"
        ],
        options: [
            ["8 bits", "16 bits", "32 bits", "64 bits"],
            ["new", "create", "class", "object"],
            [ "Use of pointers", "Portable", "Dynamic and Extensible" ,"Object-Oriented"],
            [ "finalize method", "main method", "static method", "private method"],
            ["java.util package", "java.lang package", "java.awt package", "java.io package"],
            ["int", "float", "boolean", "string"],
            [ "getLength()", "Size()","length()", "len()"],
            ["public", "protected", "private", "default"],
            ["implements", "extends", "inherits", "super"],
            ["break", "stop", "exit", "return"]

        ],
        answers: [2, 0, 3, 1, 0, 3, 2, 2, 1, 0] // correct answers for Java
    }
};


//   array contains the background colors
// const themeColorArray = [
//     "rgb(89, 14, 89)",
//     "rgb(89, 14, 15)",
//     "rgb(24, 14, 89)",
//     "rgb(14, 87, 89)",
//     "rgb(14, 89, 57)",
//     "rgb(27, 89, 14)",
//     "rgb(89, 53, 14)",
//     "rgb(112, 20, 143)",
//     "rgb(143, 20, 120)",
//     "rgb(20, 143, 63)"
//     ];

//     selectTheme();

// Function to start the quiz based on selected language
function startQuiz() {
    let selectedLanguage = languageSelect.value;
    let quiz = quizzes[selectedLanguage];

    // Reset variables
    questionIndex = 0;
    questionsAsked = [];
    score = 0;          //reset score to zero
    scoreSection.innerText = `${score}`; 
    totalQuestionCount = quiz.questions.length;


    const currentQuestionElement = document.getElementById("current-question");
    currentQuestionElement.innerText = questionIndex + 1;
    // Show game screen and hide the main screen
    gameScreen.style.display = "flex";
    mainScreen.style.display = "none";
    gameEndPanel.style.display = "none";
    instruction.style.display = "block";
    document.querySelector('.exit-btn').style.display='block';

    // Display the first question
    displayQuestion(quiz, questionIndex);
}

// Function to display the current question and options
function displayQuestion(quiz, questionIndex) {
    question.innerText = quiz.questions[questionIndex];

    // Set options
    optionA.innerText = quiz.options[questionIndex][0];
    optionB.innerText = quiz.options[questionIndex][1];
    optionC.innerText = quiz.options[questionIndex][2];
    optionD.innerText = quiz.options[questionIndex][3];

// updateQuestionTracker();
}

// Function to handle user answer selection
function checkAnswer(selectedOption) {
    let selectedLanguage = languageSelect.value;
    let quiz = quizzes[selectedLanguage];
    let correctAnswer = quiz.answers[questionIndex];
    let selectedButton;

    // Select the correct button
    if (selectedOption === 0) selectedButton = optionA;
    if (selectedOption === 1) selectedButton = optionB;
    if (selectedOption === 2) selectedButton = optionC;
    if (selectedOption === 3) selectedButton = optionD;

    // Check if the selected option matches the correct answer
    if (selectedOption === correctAnswer) {
        selectedButton.style.backgroundColor = "green";
        score += 10;
        scoreSection.innerText = `${score}`;
        
    } else {
        selectedButton.style.backgroundColor = "red";
        

        // Show the correct answer in green
        if (correctAnswer === 0) optionA.style.backgroundColor = "green";
        if (correctAnswer === 1) optionB.style.backgroundColor = "green";
        if (correctAnswer === 2) optionC.style.backgroundColor = "green";
        if (correctAnswer === 3) optionD.style.backgroundColor = "green";
    }
   

    // Move to the next question after a 1-second delay
    setTimeout(() => {
        // Reset the background color for all options
        optionA.style.backgroundColor = "";
        optionB.style.backgroundColor = "";
        optionC.style.backgroundColor = "";
        optionD.style.backgroundColor = "";

        //update questionsAsked Array
        
        questionIndex++;
        const currentQuestionElement = document.getElementById("current-question");
        currentQuestionElement.innerText = questionIndex + 1;
    
        if (questionIndex < quiz.questions.length) {
            displayQuestion(quiz, questionIndex);
            
        
        } else {
            endGame();
        }
        
        // updateQuestionCountElement(questionIndex);

    }, 1000);
}


function toggleOptionPanelClickEvents()
{
    optionPanelPointerEventEnabled = !optionPanelPointerEventEnabled;
    
    optionPanel.style.pointerEvents = optionPanelPointerEventEnabled? "initial": "none";
}

// // function will change questions and options
// function changeQuestion() {
//     // optionA.classList.remove("right-option", "wrong-option");
//     // optionB.classList.remove("right-option", "wrong-option");
//     // optionC.classList.remove("right-option", "wrong-option");
//     // optionD.classList.remove("right-option", "wrong-option");
//     toggleOptionPanelClickEvents();
//     questionIndex = Math.floor(Math.random()*totalQuestionCount);
    
//     if(questionsAsked.length < totalQuestionCount)
//     {        
//         while(questionsAsked.includes(questionIndex))
//         {
//             questionIndex = Math.floor(Math.random()*totalQuestionCount);
//         }
        
//         questionsAsked.push(questionIndex);
//         updateQuestionsAskedElement(questionsAsked.length)
//         question.innerHTML = quiz.question[questionIndex]; //change question text
        
//         questionCount++;
        
//         updateQuestionCountElement(questionCount);
//         // Update the question tracker
//         const currentQuestionElement = document.getElementById("current-question");
//         currentQuestionElement.innerHTML = questionCount;

//         //this is what determines when the game is finished
//         if (questionCount > totalQuestionCount -1) endGame(); 
//         calculateTheFinalScore();        
//     }else{        
//         updateQuestionsAskedElement(questionsAsked.length);
//     }     
// }

// Function to end the quiz and display the score
function endGame() {
    // Show final score and percentage
    gameScoreBox.innerText = score;
    totalScoreBox.innerText = totalQuestionCount * 10;
    let scorePercent = (score / (totalQuestionCount * 10)) * 100;
    percentBox.innerText = `(${scorePercent}%)`;

    if (scorePercent >= 80) {
        remarkEmoji.innerHTML = "🤩";
        percentBox.style.color = "limegreen";
    } else if (scorePercent >= 70 && scorePercent < 80) {
        remarkEmoji.innerHTML = "💯";
        percentBox.style.color = "lime";

    } else if (scorePercent >= 60 && scorePercent < 70) {
        remarkEmoji.innerHTML = "👏"; // Change this emoji

    } else if (scorePercent >= 50 && scorePercent < 60) {
        remarkEmoji.innerHTML = "👍";
        percentBox.style.color = "yellow";
        
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
        remarkEmoji.innerHTML = "🥳";
        percentBox.style.color = "lightgreen";

    }
    // // Display remark and emoji based on score percentage
    // remarkEmoji.innerText = scorePercent >= 80 ? "🎉" : "🙂";

    // Show end game panel and hide game screen
    gameEndPanel.style.display = "flex";
    gameScreen.style.display = "none";
    document.querySelector('.exit-btn').style.display= 'flex';
    
}

// Function to restart the quiz
function restartQuiz() {
    // Reset everything and go back to the main screen

    currentQuestionElement = 0;
    questionIndex = 0; 
    score = 0;
    mainScreen.style.display = "flex";
    gameEndPanel.style.display = "none";
    gameScreen.style.display = "none";

    
}

// Event listeners


startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

// Handling option click events
optionA.addEventListener("click", () => checkAnswer(0));
optionB.addEventListener("click", () => checkAnswer(1));
optionC.addEventListener("click", () => checkAnswer(2));
optionD.addEventListener("click", () => checkAnswer(3));

// change theme color
function selectTheme() {
    let themeIndex = Math.floor(Math.random()*themeColorArray.length);
    let themeColor = themeColorArray[themeIndex];
    gameScreen.style.backgroundColor = themeColor;
}


instruction.addEventListener("click", () => {
        instructionPanel.style.display = "flex";
        document.querySelector('.close-btn1').style.display = 'none';
        document.querySelector('.close-btn2').style.display = 'flex';
        document.querySelector('.exit-btn').style.display= 'none';
    
}) 

instExitBtn2.addEventListener("click", () => {
    instructionPanel.style.display = "none";
    document.querySelector('.exit-btn').style.display= 'flex';
})

function exitQuiz(){
    
    alert("Would you like to exit the quiz?");
    if(true) {
        document.querySelector('.game-screen').style.display= 'none';
        document.querySelector('.main-screen').style.display= 'flex';
        document.querySelector('.game-end-panel').style.display = 'none';
        document.querySelector('.exit-btn').style.display= 'none';
    } else {
        document.querySelector('.game-screen').style.display= 'flex';
        document.querySelector('.main-screen').style.display= 'none';
        document.querySelector('.game-end-panel').style.display = 'none';
        document.querySelector('.exit-btn').style.display= 'none';
    }
    
}

// read instruction button on main screen functionality
readInstructionBtn.addEventListener("click", () => {
    instructionPanel.style.display = "flex";
    document.querySelector('.close-btn1').style.display= 'flex';
    document.querySelector('.close-btn2').style.display= 'none';
    document.querySelector('.exit-btn').style.display= 'none';
});

instExitBtn1.addEventListener("click", () => {
    instructionPanel.style.display = "none";
});
