const fs = require('fs');
const process = require('process');

const questions = [
  'What is 2+2',
  'How many sides are there on an octagon?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];


function askName(){
  process.stdout.write(`What is your name?\n`);
  process.stdin.on('data',function(username){
    let inputName = username.toString().trim();
    if (inputName.length >1) {
      fs.writeFile(`./${inputName}.txt`,`${inputName}'s Quiz Result'`,(err)=>{
        if (err) throw err;
        askQuestion(0);
      })
    }
  });
}

function askQuestion(num){
  process.stdout.write(`\n${questions[num]}\n`);

  process.stdin.on('data',function(answer){
    let inputAnswer = answer.toString().trim();
    let questionNum = usersAnswers.length;
    if (inputAnswer === correctAnswers[questionNum]) {
      usersAnswers.push(inputAnswer);
      if (usersAnswers.length === questions.length) {
        process.exit();
      } else {
        askQuestion(usersAnswers.length);
      }
    } else {
        process.stdout.write(`\n${inputAnswer} is the wrong answer, please try again\n`)
      }
  });
}

askName();

process.on('exit', function(){
  process.stdout.write(`\nWell done, you got the right answer\n`);
})
