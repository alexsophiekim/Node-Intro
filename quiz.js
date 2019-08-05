const process = require('process');

const question = [
  'What is 2+2',
  'How many sides are there on an octagon?'
]

const correctAnswers = [
  '4',
  '8'
]

let usersAnswers = [];


function askQuestion(num){
  process.stdout.write(`\n${question[num]}\n`);
  process.stdin.on('data',function(answer){
    let inputAnswer = answer.toString().trim();
    if (inputAnswer === correctAnswers) {
      usersAnswers.push(inputAnswer);
    }
      if (inputAnswer[num] === `${correctAnswers[num]}`) {
        process.stdout.write(`${inputAnswer[num]} is correct.  Well done!`);
        askQuestion(num+1);
        
      } else {
        process.stdout.write(`\n${inputAnswer[num]} is the wrong answer, please try again\n`)
      }

  });

}

askQuestion(0);

//
// process.stdout.write(`\n\nWhat is 2+2\n\n`);
// process.stdin.on('data', function(answer){
//   // console.log(answer.toString().trim());
//   let inputAnswer = answer.toString().trim();
//   if(inputAnswer === '4') {
//     process.exit(); //stop the process
//   } else {
//     process.stdout.write(`\n${inputAnswer} is the Wrong answer, please try again\n`);
//   }
// })
//
process.on('exit', function(){
  process.stdout.write(`\nWell done, you got the right answer\n`);
})
