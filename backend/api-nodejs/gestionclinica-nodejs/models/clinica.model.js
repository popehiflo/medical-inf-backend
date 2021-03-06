const { Schema, model } = require('mongoose');

const ClinicaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});
//}, {  collection: 'hospitales' });
/* Cuando mongoose genera la collecion en mongo db, le asiganara, el nombre en plural 
    pero en ingles (solo aumenta la "s") 'clinicas'. La linea 17 ayuda a que le asignes
    el nombre que quieras, solo reemplaza la linea 16 */

// Quita __v del objeto y lo devuelve sin el
ClinicaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// implementar/exponer modelo
/* Cuando mongoose genere la collecion en mongo db le asiganara,
    el nombre en plural 'Usuarios' */
module.exports = model( 'Clinica', ClinicaSchema );