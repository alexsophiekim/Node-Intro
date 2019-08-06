const fs = require('fs');
fs.readFile('message.txt', 'utf-8', (err,data) =>{
  if(err) throw err;
  console.log(data);
});


/*
//readFileSync
console.log('A');
var result = fs.readFileSync('message.txt', 'utf8');
console.log(result);
console.log('C');
*/
