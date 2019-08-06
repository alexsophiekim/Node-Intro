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

const inputAnswer=[];


function askName(){
  process.stdout.write(`What is your name?\n`);
}

process.stdin.on('data',(answer) => {
  let inputAnswer = answer.toString().trim();
  const name = `User name is ${inputAnswer}`;
  fs.writeFile('user.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    process.exit();
  });
});

askName();
