// var questions = [
//   {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//   },
//   {
//     title: "The condition in an if / else statement is enclosed within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//   }

// ];

// var answer = document.getElementById("message");
// function showMessage () {
//     answer.className = "show"
// }

function toQuiz() {
  document.getElementById("afterSubmit").style.visibility = "visible";
}

// function answer() {
//   var question1 = document.quiz.question1.value;
//   var question2 = document.quiz.question2.value;
//   var question3 = document.quiz.question3.value;
//   var question4 = document;
//   var question5 = document;
//   var correct = 0;

//   if (question1 == "A") {
//     correct++;
//   }

var timeLeft = 75;
var downloadTimer = setInterval(function() {
  document.getElementById("timeLeft").innerHTML =
    timeLeft + " seconds remaining";
  timeLeft -= 1;
  if (timeLeft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("timeLeft").innerHTML = "Done";
  }
}, 1000);
