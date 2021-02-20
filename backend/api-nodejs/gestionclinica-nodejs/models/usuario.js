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

// Reescribe _id por uid, solo visual no afecta bd
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

// implementar/exponer modelo
/* Cuando mongoose genere la collecion en mongo db le asiganara,
    el nombre en plural 'Usuarios' */
module.exports = model('Usuario', UsuarioSchema);