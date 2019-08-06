const fs = require('fs');
const process = require('process');

function startMessage(){
  process.stdout.write(`What is your name?\n`);
}

process.stdin.on('data',(answer) =>{
  let inputAnswer = answer.toString().trim();
  const data = `Hello there ${inputAnswer}`;
  fs.writeFile('message.txt',data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    process.exit();
  });
});

startMessage();
