const path = require('path');

//platform seperator
console.log(path.sep);

//join a sequeces of path segment using that platform seperator and return normalized path
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//return absolute path: accept segment path, or path
//__dirname pathname
// reason to use this is to find the absolute path of certain in different computer or environment
const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath);