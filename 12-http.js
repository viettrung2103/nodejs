const http = require('http');

// 1. create server
//createServer receive cb, need req and res
// req: incoming request, client browser is request
// respond: what sending back
const server = http.createServer((req,res) => {
  //request part
  // if url is the homepage
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  else if (req.url === '/about') {
    res.end('Here is our About Page');
  }
  // if client cannot find the page
  // default respond
  else 
  res.end(`
    <h1>Oops!</h1>
  <p> We can't seem to find the page you are looking for</p>
  <a href="/">Back Home</a>
  `);
});
// port that we listen
server.listen(5000);
