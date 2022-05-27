/**
 * Ruta: /api/medico
 */
const { Router } = require("express");
const { check } = require("express-validator");
const {
  getMedicos,
  createMedico,
  updateMedico,
  deleteMedico,
} = require("../controllers/medico.controller");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

// Listar Medicos
router.get("/", getMedicos);

// Crear Medico
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("clinica", "La clinica debe de ser valida").isMongoId(),
    validarCampos,
  ],
  createMedico
);

// Modificar Medico
router.put(
  "/:id",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("role", "El rol es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  updateMedico
);

// Eliminar Medico
router.delete("/:id", deleteMedico);

module.exports = router;
