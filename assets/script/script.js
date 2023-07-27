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

//