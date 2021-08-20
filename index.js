const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score =0;
console.log(chalk.blue('----------------------------------------'));
console.log("Welcome to "+chalk.bgRed("Stranger Things's Quiz"));
console.log(chalk.blue('----------------------------------------'));

var q1={
  question:"Who appeared in all seasons of stranger things\n a: Jim Hopper \n b: Eleven",
  answer:"a",
};

var q2={
  question:"Currently how many seasons aired? \n a: 4  \n b: 3 ",
  answer:"b",
};

var q3={
  question:"Who are the creators of stranger things \n a: Duffer brothers \n b: wright brothers",
  answer:"a",
};

var q4={
  question:"What is eleven's favourite snack \n a: Jello \n b: Eggo",
  answer:"b",
};

var q5={
  question:"Which OTT airs stranger things \n a: Prime \n b: Netflix",
  answer:"b",
};

function quiz(question,answer){
  var userAnswer = readlineSync.question(question+"\n");
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bgGreen("Right!"));
    score++;
  }else{
    console.log(chalk.bgYellow("Wrong :("));
  }

  console.log("Current Score : "+score);
}

quiz(q1.question,q1.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q2.question,q2.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q3.question,q3.answer);
console.log(chalk.cyan('----------------------------------------'));

quiz(q4.question,q4.answer);
console.log(chalk.cyan('----------------------------------------'));
quiz(q5.question,q5.answer);
console.log(chalk.cyan('----------------------------------------'));


console.log("High score : 5\nYour score :",score);