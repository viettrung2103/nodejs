//local
const secret = 'SUPER SECRET';
//share, be shared with others
const john = 'john';
const peter = 'peter';

console.log(module);

// what is dumped inside export object will be exported and be accessed by others
module.exports = {john,peter};