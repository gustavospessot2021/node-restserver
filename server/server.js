require('./config/config');


const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario.js'));

const puerto = process.env.PORT; // ver en config/config.js
// const puerto = 3000;

// ============================
// Puerto de la Base de Datos
// ============================
const puertoDB = 27017; // Correcta = 27017

// ===========================
// Nombre de la Base de Datos
// ===========================
const nombreDB = 'cafe';


mongoose.connect(`mongodb://localhost:${puertoDB}/${nombreDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, respuesta) => {

    if (err) {
        console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`.bgRed.white);
        console.log(`No se pudo conectar a la Base de Datos!!!`.red);
        console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`.bgRed.white);
        throw new Error(err);
    }

    let mens = `Base de datos <${nombreDB}> ONLINE en el puerto ${puertoDB}`;

    console.log(mens.green);;
    // console.log(respuesta);


});




// mongoose.connection.on('error', err => {
//     console.log(err);
// });

console.log();

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}...`.yellow);
});