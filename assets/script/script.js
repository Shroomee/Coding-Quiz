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
var highscoreBtn = document.getElementById("highscoreBtn");
var highscore = document.getElementById("appendTargetScores");


var score = 0;
var timeLeft = 60;
var timerInterval;
var questionIndex = 0;

var questions = [{
    question: "What is the the language you use for a stylesheet called?",
    options: ["a. html", "b. css", "c. javascript", "d. java"],
    answer: "b. css"
},
{
    question: "Which of these are a boolean?",
    options: ["a. 5", "b. yes", "c. true", "d. 100"],
    answer: "c. true"
},
{
    question: "What is the element for the largest header?",
    options: ["a. h2", "b. h1", "c. h3", "d. h12"],
    answer: "b. h1"
},
{
    question: "How would you call a function named 'function1'?",
    options: ["a. function1()", "b. function1", "c. function 1", "d. call function1"],
    answer: "a. function()"
},
{
    question: "What is a tool to manipulate code called?",
    options: ["a. vscode", "b. google", "c. youtube", "d. dorito"],
    answer: "a. vscode"
},
]


//function Start quiz



function startQuiz () {
    //Hide button and start div
    start.style.display = "none";
    startBtn.style.display = "none";
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
    actualQuestion.style.fontSize= "35px";
    const currentQuestion = questions[questionIndex];
    actualQuestion.textContent = currentQuestion.question;
    //Answer choices for loop and create buttom elements for each
    answer1.innerHTML = '';
    for(let i = 0; i < currentQuestion.options.length; i++) {
        var answerChoices = currentQuestion.options[i];
        var answerChoicesEl = document.createElement('button');
        answerChoicesEl.textContent = answerChoices;
        //event listener for choice with click that also runs to check if answer or right or wrong
        answerChoicesEl.addEventListener('click',rightOrWrong)
        answer1.appendChild(answerChoicesEl);
    }
}

//right or wrong function

function rightOrWrong(event) {
    const currentQuestion = questions[questionIndex];
    //if else for if question is right or not add to score or take away time
        if (event.target.textContent === currentQuestion.answer) {
            
            score++;
           
            // document.getElementById("score").textContent = score;
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
        console.log(score)
}
// console.log(score)
//function for ending the game

function quizEnd() {
    clearInterval(timerInterval);
    noTime.style.display = "block";
    noTime.style.fontSize = "50px"
    actualQuestion.textContent = "Game over! put your intials down below! Your Score is " + score + "."
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

//function for showing highscores

function showHighScores() {
    var pullInitals = JSON.parse(localStorage.setItem("initials", initials));
    var pullScore = json.parse(localStorage.setItem("score", score));

    for (let i=0; i< pullInitals.length; i++) {
        highscore.textContent = pullInitals[i].initials;
    }

    for (let i=0; i< pullScore.length; i++) {
        highscore.textContent = pullScore[i].score;
    }
}

//event listeners
startBtn.addEventListener("click", startQuiz)
saveButton.addEventListener("click", save)
highscoreBtn.addEventListener("click", showHighScores)







