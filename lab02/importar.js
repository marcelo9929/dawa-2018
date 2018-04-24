var http = require('http'),
    fs  = require('fs'),
    parser = require('./parser_var'),
    p = parser.parse_vars,
    identidad = parser.identidad,
    poder = parser.poder,
    fun = require('./ejercicios')


    http.createServer( (req, res) => {
        fs.readFile('./form.html', (err, html) => {
            var html_string = html.toString()
            var respuesta = p(req),
            parametros = respuesta['parametros'],
            valores = respuesta['valores']

            for (let i = 0; i < parametros.length; i++) {
            html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);    
            if(parametros[i] == 'fecha'){
          html_string = html_string.replace('-fecha-', fun.difFechas(valores[i]));
        }
             }

            html_string = html_string.replace('{identidad}', identidad);
            html_string = html_string.replace('{poder}', poder);

            res.writeHead(200,{'Content-Type': 'text'})
            res.write(html_string)
            res.end()
        })
    }).listen(8000)