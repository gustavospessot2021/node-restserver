const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'DEV_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true, // se usa con unique-validator -> Mensajes propios
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    img: {
        type: String
    },

    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }, // default: 'USER_ROLE'

    estado: {
        type: Boolean,
        default: true
    }, // boolean

    google: {
        type: Boolean,
        default: false
    } // boolean


});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);