//get element by ids 
var countdown = document.getElementById("countdown");
var timeLeft = document.getElementById("timeLeft")


//Array of questions to pull from 
var questions = [{
    question: "What is the the language you use for a stylesheet called?",
    options: ["a. html", "b. css", "c. javascript", "d. java"],
    answer: "b"
},
{
    question: "Which of these are a boolean?",
    options: ["a. 5", "b. yes", "c. true", "d. 100"],
    answer: "c"
},
{
    question: "What is the element for the largest header?",
    options: ["a. h2", "b. h1", "c. h3", "d. h12"],
    answer: "b"
},
{
    question: "How would you call a function named 'function1'?",
    options: ["a. function1()", "b. function1", "c. function 1", "d. call function1"],
    answer: "a"
},
{
    question: "What is a tool to manipulate code called?",
    options: ["a. vscode", "b. google", "c. youtube", "d. dorito"],
    answer: "a"
}
]

//get element by ids for timers
var ti