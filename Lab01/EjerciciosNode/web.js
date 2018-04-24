
var http = require('http')

var fs = require('fs')

http

http.createServer((req, res) => {
    
    fs.readFile('./index.html', (err, html) => {
        console.log(`Conectado desde el puerto:  ${req.connection.localPort}`)
        res.write(html)
        res.end()
    })

}).listen(8000)
