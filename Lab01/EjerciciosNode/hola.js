var http = require('http')
var server = http.createServer((req, res) => {
    res.end('Todo en orden')
    console.log('Hola mundo')
});

server.listen(8000)