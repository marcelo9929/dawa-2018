var http = require('http')

var server = http.createServer((req, res) => {
    var i = 0
    res.end('sdfs')
    while (true) {
        res.write(i + '-->')
        res.end('marcelo ocsa')
        i++
    }
});

server.listen(8000)