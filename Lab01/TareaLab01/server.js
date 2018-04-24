
const url = require('url')
const http = require('http')
const services = require('./services')

http.createServer((req, res) => {
    let url_local = url.parse(req.url).pathname
    let path = services.validateUrl(url_local)
    
    if (path != null) {
        res.writeHead(200, null, { 'Content-Type': 'text/html' })
        services.renderHtml(path , res)
    }else{
        res.write('<h1>Página no encontrada</h1>')
        res.end()
    }

}).listen(8000)




