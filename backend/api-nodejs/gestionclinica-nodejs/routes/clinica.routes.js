/**
 * Ruta: /api/clinica
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { getClinicas, createClinica, updateClinica, deleteClinica } = require('../controllers/clinica.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

// Listar Clinicas
router.get( '/', getClinicas);

// Crear Clinica
router.post( '/',
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createClinica
);

// Modificar Clinica
router.put( '/:id', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El rol es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    updateClinica
);

// Eliminar Clinica
router.delete( '/:id',  
    deleteClinica
);


module.exports = router;