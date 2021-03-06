/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuario.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


// Listar Usuarios
router.get( '/' , validarJWT, getUsuarios );
// Crear Usuario
/*
router.post( ruta, middleware, controlador)
router.post( ruta, 
    [ 
        varios, 
        middlewares 
    ],
    controlador
) 
*/
router.post( '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,

    ], 
    createUsuario 
);
router.put( '/:id', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El rol es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    updateUsuario
);
router.delete( '/:id', 
    validarJWT, 
    deleteUsuario);


module.exports = router;