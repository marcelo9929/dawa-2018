var express = require ('express')
var app = express()

app.get('/', function (req, res){
	res.send('Hola mundo en Express:3')
})

app.post('/', function (req, res){
	res.send('Llama Post misma URL')
})

app.put('/user', function (req, res){
	res.send('Recibimos un put en /user')
})

app.delete('/user', function (req, res){
	res.send('Recibimos un DELETE en /user')
})

app.use(function (req, res, next){
	res.status(404).send("Eso no existe")
})

app.use(function (err, req, res, next){
	console.error(err.stack)
	res.status(500).send('Algo salio mal!!!!')
})
app.use(express.static('files'))
app.use('/static', express.static('public'))

app.listen(3000, function (){
	console.log('Aplicacion de ejemplo escuchando el puerto 3000!')
});