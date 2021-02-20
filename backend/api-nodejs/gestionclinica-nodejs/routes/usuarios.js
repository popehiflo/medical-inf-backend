/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { getUsuarios, crearUsuario } = require('../controllers/usuario');

const router = Router();


// Listar Usuarios
router.get( '/' , getUsuarios );

// Crear Usuario
router.post( '/', 
    crearUsuario 
);


module.exports = router;