/*
Cloud Task for 6th August

Combine both the process and filesystems modules to create a new quiz.
This quiz needs to (in no particular order)
- Ask for the users name
- Ask them a set of questions
- At the end of the quiz tell them how many questions they got right and wrong
- Tell them what was the correct answers for the questions they got wrong
- Output a .txt file with their name as the filename which has all their results on it
- If someone with the same name does the quiz, we want a different file to be created rather than the other persons file be remove.
*/

const fs = require('fs');
const process = require('process');

const questions =[
  '4+4 =',
  '4*4 ='
];
const correctAnswers =[
  '8',
  '16'
];

const usersAnswer=[];

let userName;
let validUserName = false;

function askName(){
  process.stdout.write(`Hello,\nWhat is your name?\n`);
}

function askQuestion(num){
  process.stdout.write(`${questions[num]}\n`);
}


process.stdin.on('data', function (answer){
  const inputAnswer = answer.toString().trim();

  if (validUserName === false) {
    userName = inputAnswer;
    const fileName = inputAnswer.replace(/\s/g,'').toLowerCase();
    if (fs.existsSync(`./results/${fileName}.txt`)) {
      process.stdout.write(`\nSorry, someone with the name ${userName} has already completed the quiz, please enter another name (full name, nickname, etc)\n`);
    } else {
      const data = `Quiz Results for ${inputAnswer}`;
      fs.writeFile(`./results/${fileName}.txt`, data, (err) => {
        if (err) throw err;
        validUserName = true;
        process.stdout.write(`\nThank you ${userName} lets start the quiz.\n`);
        askQuestion(0);
    })
   }
  } else {
    // This is where we will run the quiz
    console.log(inputAnswer);
  }

});
//
// process.stdin.on('data',(answer) => {
//   let inputAnswer = answer.toString().trim();
//   const name = `User name is ${inputAnswer}`;
//   console.log(answer);
//   fs.writeFile('user.txt',(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//     process.exit();
//   });
// });


askName();
