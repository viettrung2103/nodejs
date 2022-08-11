//asynchronously -- unblock : callback when a this function is done, it will start calling another function
// require callback, run callback when we is done
const { readFile, writeFile } = require('fs');
console.log('start')

//readfile (pathFile,cb)  : inside readFile there is 2  parameter
// cb = (err,result) => { : inside cb there are 2 parameters
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(result)
// })

//without adding the coding method, readfile will return buffer
//readFile has 3 parameter: pathFile, code method, cb
//readFile(pathFile,codemethod,cb)
readFile ('./content/first.txt','utf8',(err,result) => {
  if (err) {
    console.log(err); 
    return
  }
  //access first file when success, 
  const first = result;
  readFile ('./content/second.txt','utf8',(err,result) => {
if (err) {
    console.log(err); 
    return
}
  //access second file when success
const second = result;
    // write new file and join first and second
//writeFile method : ( pathFile, content, cb)

writeFile(
    './content/result-async.txt',
    `Here is the result: ${first}, ${second}`,
    (err,result) => {
      if (err) {
        console.log(err);
        return
      }
      console.log('done with this task');
    })
  })
})
console.log('start the next one');

// with this approach, async, when a app is started, it will offload the task to whoever user use it and right away can start a new task
// application has this cb hell >> solution promise and async and await