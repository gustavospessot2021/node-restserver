const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.json('Pagina Home')
});

app.get('/usuario', function(req, res) {
    res.json('PETICION : get Usuario')
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
            user_passed: body
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
    res.json('PETICION: delete Usuario')
});

app.get('/hola', function(req, res) {
    res.send('Hola Mundo')
});

app.get('/hola/:nombre', function(req, res) {
    let nomb = req.params.nombre;
    res.send(`Hola ${nomb}!!!`);
});


// EXPORTACIONES !!
module.exports = app;