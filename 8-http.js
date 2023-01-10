let http = require('http')

let server = http.createServer((req, res) => {
  if (req.url == '/'){
    res.end('Welcome to the home page');
  } else if (req.url == '/about') {
    res.end('what do you want to know about me')
  } else {
    res.end(`
      <h1>Sorry Didnt Find That</h1>
      <p>Go back to home page <a href='/'>Here</a></p>
    `)
  }
})

server.listen(1000)

