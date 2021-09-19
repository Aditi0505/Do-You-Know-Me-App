let input = require("readline-sync");
const chalk = require('chalk');
let score =0;
let flag=0;
const userName = input.question(chalk.blue("May I have your name? "));
console.log(chalk.bgYellow("Welcome ",userName, " to DO YOU KNOW ME quiz!"))
// highscores 
var highScores = [
  {
    name : "Aditi",
    score : "2"
  },
  {
    name : "Ananya",
    score : "1"
  }
]
// questions list of objects
const questions =[
{
question: chalk.magenta("Where do I live? "),
answer: "Patna"
},
{
question: chalk.magenta("Am I older than 25? "),
answer: "No"
},
{
question: chalk.magenta("What do I like more FRIENDS or Harry Potter? "),
answer: "Harry Potter"
},
{
question: chalk.magenta("Where is my Engineering College? "),
answer: "Dehradun"
},
{
question: chalk.magenta("What is my favorite color? "),
answer: "Purple"
}
]

// main game function
function play(question,answer){
  const userAnswer = input.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bgGreen("You are correct!"));
    score += 1;
  }
  else{
    console.log(chalk.bgRed("Sorry, You are wrong!"));
    score -= 1;
  }
  console.log(chalk.blue("Your current score is :" ,score));
  console.log("-----------------------");
}

for(let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
console.log(chalk.bgBlue("Your final score is: ", score));
console.log(chalk.yellow("Following are the High scores :"))
for(let i=0;i<highScores.length;i++){
  console.log(chalk.red(highScores[i].name), chalk.red(":"), chalk.green(highScores[i].score))
  if(score > highScores[i].score){
    flag +=1;
  }
}
if(flag > 0){
  console.log(chalk.bgCyan("Congratulations! You have beaten the high score. Send me a screenshot of your score so that I can update it."))
}
