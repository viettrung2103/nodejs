// NPM:
// 1. reuse our own code in other projects
// 2. use code written by other developers
// 3. share our solution with others
// dependencies = modules = packages

//npm - global command, comes with node
//npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName> (g = global)
// sudo npm install -g <packageName> (mac)

// package.json manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init ( step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // to access lodash module
console.log(newItems);
console.log ("hello new change here");

// when cloning new project, type npm install in terminal to install all the project's dependencies
// to install as develope dependencies, add - D or --save-dev
// sometimes, we just need some packages to test something or in development, therefore, we dont need these packages in deployment >> dependencies and dev-dependencies

// to remove package
// 1.npm install packageName
// 2. nuclus method : remove package.json file