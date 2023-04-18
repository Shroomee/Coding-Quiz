//variables to pull from
var start = document.getElementById("start");
var startBtn = document.getElementById("startBtn");
var countdown = document.getElementById("countdown");
var timeLeft = document.getElementById("timeLeft");
var noTime = document.getElementById("noTime");
var questionBox = document.getElementById("questionBox");
var actualQuestion = document.getElementById("actualQuestion");
var answers = document.getElementById("answers");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var rightorwrong = document.getElementById("rightOrWrong");
var saveButton =document.getElementById("save");


var score = 0;
var timeLeft = 60;
var timerInterval;
var questionIndex = 0;
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
},
]


//function Start quiz



function startQuiz () {
    //Hide button
    startBtn.style.display = "none"
    //start timer
    timerinterval = setInterval(() => {
        timeLeft--;
        countdown.textContent = timeLeft;
        if (timeLeft <= 0) {
            quizEnd();
        };
    }
    ,1000);
    
    runQuestions()
};




//append the questions
function runQuestions() {
    const currentQuestion = questions[questionIndex];
    actualQuestion.textContent = currentQuestion.question;
    //Answer choices for loop and create buttom elements for each
    answer1.innerHTML = '';
    for(let i = 0; i < currentQuestion.options.length; i++) {
        var answerChoices = currentQuestion.options[i];
        var answerChoicesEl = document.createElement('button');
        answerChoicesEl.textContent = answerChoices;
        //event listener for choice with click that also runs to check if answer or right or wrong
        answerChoicesEl.addEventListener('click', () => {
            rightOrWrong(answerChoices);
        })
        answer1.appendChild(answerChoicesEl);
    }
}

//right or wrong function

function rightOrWrong(answer) {
    const currentQuestion = questions[questionIndex];
    //if else for if question is right or not add to score or take away time
        if (answer === currentQuestion.answer) {
            score++;
        }else {
            timeLeft -= 10;
        }
    questionIndex++;
    // if else for if youre done with the quiz or not
        if (questionIndex >= questions.length) {
            quizEnd();
        }else {
            runQuestions();
        }
}

//function for ending the game

function quizEnd() {
    clearInterval(timerInterval);
    actualQuestion.textContent = "Game over! put your intials down below!";
    // answers.style.display = "none";
    answers.innerHTML = "<input type= 'text'></input>";
    saveButton.style.display = "block";
}

// function to save initials and score

function save() {
     //local storage
    const initials = document.querySelector('input').value;
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
    
}

//event listeners
startBtn.addEventListener("click", startQuiz)
saveButton.addEventListener("click", save)







