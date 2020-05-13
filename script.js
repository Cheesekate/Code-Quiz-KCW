// When user loads the page, they see title, description,and a start quiz button
// They're going to click "start quiz"
// Now we show them question 1
// They choose an answer
// Create a function to show whether or not true or false for the answer
// All would be false except A (if A is correct answer)
// If they choose A, they're right
// else if they choose anything else, they're wrong and deduct 10 seconds
// seconds left should be a global variable
// Move on to the next question
// Repeat 3 more times
// They finish the quiz, give them form for initials
// When they enter initials, save them in local storage to be pulled up later

// when user starts quiz, trigger timer to start countdown
// if timer reaches 0, end time (activity 8)
// Whatever time is left becomes score

// var q1 = document.querySelector(".q1");
// var example = document.querySelector("#a1");
// document.getElementById("a1");

var time = 150;
var questionIndex = 0;
var $timer = document.querySelector("#timer");
var $startQ = document.querySelector("#startQuiz");
var $questionContainer = document.querySelector;
var startcont = document.querySelector("#startCont");

("#question-container");
var questions = [
    {
        question: "When is this hw due?",
        answers: ["erf",
            "Tuesday",
            "re",
            "erre",
        ],
        correctAnswer: "Tuesday"
    },
    {
        question: "When does class start?",
        answers: [
            "aer",
            "10",
            "cfre",
            "d",
        ],
        correctAnswer: "10"
    },
    {
        question: "When does class end?",
        answers: [
            "awe",
            "3PM",
            "cwe",
            "dwe",
        ],
        correctAnswer: "3PM"
    },
    {
        question: "What hw is this?",
        answers: [
            "awere",
            "HW4",
            "cwere",
            "redwe",
        ],
        correctAnswer: "HW4"
    },
    {
        question: "How long is this class",
        answers: [
            "awrre",
            "12 weeks",
            "cwere",
            "derwe",
        ],
        correctAnswer: "12 weeks"
    }
];





//Update this func to trigger the questions & timer 
function startQuiz() {

    var timerInterval = setInterval(function () {
        timer.textContent = time;
        time--;

        if (time === 0) {
            clearInterval(timerInterval)
        }

    }, 1000);


    startcont.style.display = "none";

    showQuestions();

};


function showQuestions() {
    var question = questions[questionIndex];
    var $question = document.querySelector("#question");
    var $answers = document.querySelector("#answers");
    $question.textContent = question.question;
    $answers.innerHTML = "";

    for (var i = 0; i < question.answers.length; i++) {
        var $btn = document.createElement("ansbutton");
        $btn.textContent = question.answers[i];
        $btn.setAttribute("class", "btn btn-primary ml-3");
        $answers.append($btn);
    }
};



document.addEventListener("click", function (e) {
    var userAnswer = e.target.textContent;
    if (!e.target.matches("ansbutton")) return


    if (userAnswer === questions[questionIndex].correctAnswer) {
        console.log("Correct");
    } else {
        console.log("Wrong!");
        //timer - placement
    }

    questionIndex++;
    if (questionIndex === questions.length) {
        endGame();

    } else {

        showQuestions();
    }
});



function endGame() {
    document.getElementById("intFrm").submit();


}



const userOrder = {};

function getValues(e) {
    // turn form elements object into an array
    const elements = Array.prototype.slice.call(e.target.elements);

    // go over the array storing input name & value pairs
    elements.forEach((el) => {
        if (el.type !== "submit") {
            userOrder[el.name] = el.value;
        }
    });

    // finally save to localStorage
    localStorage.setItem('userOrder', JSON.stringify(userOrder));
}

document.getElementById("myform").addEventListener("submit", getValues);



var highscores = localStorage.getItem("highScores");
if (highscores) {
    highscores = JSON.parse(highscores);
} else {
    highscores = [];
}
highscores.push({
    initials: "TB",
    score: "3/5"
});
localStorage.setItem("highScores", JSON.stringify(highscores));