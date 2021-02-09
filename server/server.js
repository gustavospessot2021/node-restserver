require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const puerto = process.env.PORT;
// const puerto = 3000;

app.get('/', function(req, res) {
    res.json('Pagina Home')
});

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            estado: 'Error en Datos pasados en el body',
            error: 'El nombre es necesario'
        });
    } else {
        res.json({
            request_URL: 'post Usuario',
            cuerpo_Pasado: body
        });
    }

});

app.put('/usuario', function(req, res) {

    res.json({
        id: null,
        request_URL: 'put Usuario',
        error: 'Ingrese id de usuario a modificar/put'
    });
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id,
        request_URL: 'put Usuario'
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
});

app.get('/hola', function(req, res) {
    res.send('Hola Mundo')
});

app.get('/hola/:nombre', function(req, res) {
    let nomb = req.params.nombre;
    res.send(`Hola ${nomb}!!!`);
});

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}...`);
});