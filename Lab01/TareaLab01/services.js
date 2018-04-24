const rutas = require('./rutas')
const fs    = require('fs')

function renderHtml(path, res) {
    
    fs.readFile(path, (err, html) => {
        if(err) throw err
        res.write(html)
        res.end()
    })
}

function validateUrl(url) {
   
    let file = null
    rutas.forEach(ruta => {
        if (ruta.nombre == url) {
            file = ruta.file
        }
    });
    return file
}

module.exports = {
    renderHtml,
    validateUrl
}