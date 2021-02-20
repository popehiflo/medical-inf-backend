const { Schema, model } = require('mongoose');

// Definicion schema
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    }

});

// implementar/exponer modelo
/* Cuando mongoose genere la collecion en mongo db le asiganara,
    el nombre en plural 'Usuarios' */
module.exports = model('Usuario', UsuarioSchema);