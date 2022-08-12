//synchronously -- blocking code 

//destructure module
const {readFileSync, writeFileSync} = require('fs');
console.log('start')
//same as
// const fs = require('fs');


// method read file has 2 variables, one is path, second is method to decode, normal is utf-8
//readFileSync (pathFile,codeMethod)
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// method to create new file: 2 var, 1 path, 2: value to pass
//default
//if the file not there, node will create new file
// if there is a file, node will overwrite
// if you want to append to the file instead of create/rewrite the file: need to add {flag:a}
//writeFileSync(pathFile,content)
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  {flag:'a'}
  )
console.log('done with this task');
console.log('start the next one');

//readFileSync and writeFileSync is time-consuming task, eg: 10 users do the same task, as JS is single thread, when one user do these tasks, another has to wait until the first user finish everything then the second can do these tasks
// everything happen line by line, when we are done with a task , we can start with next one



