// CommonJs, every file is module (by default), node use this to run
// Modules - Encapsulated Code ( only share minimum)
// always start ./ when import
// if 2 folder before , ../
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');


// console.log(names);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
