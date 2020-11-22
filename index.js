var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Hey sup, What's your name?");
console.log("Hey " + userName + ", Welcome aboard sire!");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Perfect! You're right buddy");
    score = score + 1;
  } else {
    console.log("wrong!");
    score = score - 1; 
  }
  console.log("You're current score is: ", score);
}

var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "Am I older than 25 years?",
  answer: "No"
},
{
  question: "What's my favourite, Pizza or Burger?",
  answer: "Pizza"
},
{
  question: "Who's my fav teacher?",
  answer: "Tanay Pratap"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

var tableLeaders = [
  {
    name: "Dhoni",
    score: 10,
  },
  {
    name: "ABD",
    score: 10,
  },
]
console.log("Check out the Table Leaders", tableLeaders);

