var RS = require("readline-sync")
console.log("Lets Play, 'How much do you know Cricket ?'")
line();
var userName = RS.question("What's your name? ")
console.log("Welcome", userName, "!");


var score = 0;
function playQuiz(question, answer) {
  var userAnswer = RS.question(question);

  if (userAnswer === answer) {
    console.log("Correct answer")
    score++;
  }
  else {
    console.log("Wrong answer")
  }

}
function line() {
  console.log("-------------------------------------------------")
}

var questions = [{
  question: "Cricket is a game of how many players ? ",
  answer: "11"
}, {
  question: "In an over how many balls to be bowled? ",
  answer: "6"
}, {
  question: "What is the maximum run possible on one legal ball? ",
  answer: "6"
}, {
  question: "How many wickets are there total? ",
  answer: "10"
}, {
  question: "One day International has how many overs ? ",
  answer: "50"
}]

for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  line();
  playQuiz(currentQuestion.question, currentQuestion.answer)
}
line();
console.log("Final score out of " + questions.length + " is " + score)