//Assigning variables to the different sections that act as pages
var welcome = document.querySelector("#introduction");
var intro = document.querySelector("#intro");
var question = document.querySelector("#question");
var highScore = document.querySelector("#highscore");
var askQuestion = document.querySelector("#ask-question");
var scoreBoard = document.querySelector("#submit");

//Assigning variables for all buttons
var startBtn = document.querySelector("#start-button");
var allButtons = document.querySelectorAll(".choices");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var backButton = document.querySelector("#back-btn");
var clearButton= document.querySelector("#clear-btn");
var submitButton = document.querySelector("#submit-btn");

//Assigning variables that are used for local storage/scores/etc
var checkLine = document.querySelector("#check-line");
var finalScore = document.querySelector("#final-score");
var userInitial = document.querySelector("#initial");
var scoreRecord = document.querySelector("#score-record");
var scoreCheck = document.querySelector("#score-check");
var finish = document.querySelector("#finish");

//Assigning counter/countdown variables
var timeLeft = document.getElementById("timer");
var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

//Writing the questions and their proper answers as an object
var questionObject = [
    {
        question: "Question 1 : Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "Question 2 : The condition of an if / else statement must be enclosed with ____.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "b"
    },
    {
        question: "Question 3 : An array in javascript can be used to store ____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d"
    },
    {
        question: "Question 4 : String values must be closed with a ____ when being assigned to variables.",
        choices: ["a. comma", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },
    {
        question: "Question 5 : A very useful tool for development and debugging for printing content to the debugger is: ",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        answer: "d"
    },
];

//Starting the countdown timer using the setInterval() function
function countdown() { 
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " s";
        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!"; 
            gameOver();
        } else if (questionCount >= questionObject.length +1) {
            clearInterval(timerInterval);
            gameOver();
            } 
}, 1000);
}

//Start quiz function for eventlistener, hides the description and shows the questions, calls the countdown function to start the timer
function startQuiz () {
    intro.style.display = "none";
    question.style.display = "block";
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
}

//Function to show the question with their corresponding choices
function showQuestion (n) {
    askQuestion.textContent = questionObject[n].question;
    answer1.textContent = questionObject[n].choices[0];
    answer2.textContent = questionObject[n].choices[1];
    answer3.textContent = questionObject[n].choices[2];
    answer4.textContent = questionObject[n].choices[3];
    questionNumber = n;
}

//Function to display "Right!" or "Wrong!" after answering a question. This function will then display the next question after an answer button has been pressed
function checkAnswer(event) {
    event.preventDefault();
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);
    if (questionObject[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!"; 
        totalScore = totalScore + 1;
    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong!";
    }
    if (questionNumber < questionSource.length -1 ) {
        showQuestion(questionNumber +1);
    } else {
    endGame();
}
questionCount++;
}

//A function to hide the questions, show the scores, and stop the countdown
function endGame() {
    question.style.display = "none";
    scoreBoard.style.display = "block";
    finalScore.textContent = "Your final score is: " + totalScore ;
    timeLeft.style.display = "none"; 
};

//A function to return the saved scores from local storage
function getScore () {
    var currentList =localStorage.getItem("ScoreList");
    if (currentList !== null ){
        newList = JSON.parse(currentList);
        return newList;
    } else {
        newList = [];
    }
    return newList;
};

//A function to display the scores to the scoreboard
function renderScore () {
    scoreRecord.innerHTML = "";
    scoreRecord.style.display ="block";
    var highScores = sort();   
    var topFive = highScores.slice(0,5);
    for (var i = 0; i < topFive.length; i++) {
        var item = topFive[i];
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
    }
};

//A function to sort the scores
function sort () {
    var unsortedList = getScore();
    if (getScore == null ){
        return;
    } else{
    unsortedList.sort(function(a,b){
        return b.score - a.score;
    })
    return unsortedList;
}};

//Adds score and initial to localstorage
function addScore (n) {
    var addedList = getScore();
    addedList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(addedList));
};

function saveScore () {
    var scoreItem ={
        user: userInitial.value,
        score: totalScore
    }
    addScore(scoreItem);
    renderScore();
}



