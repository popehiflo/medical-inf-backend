const { Schema, model } = require("mongoose");

const MedicoSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  clinica: {
    type: Schema.Types.ObjectId,
    ref: "Clinica",
    required: true,
  },
});

// Quita __v de object y lo devuelve sin ese item
MedicoSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Medico", MedicoSchema);
