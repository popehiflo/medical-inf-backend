/**
 * Ruta: /api/todo:buscar
 */

const { Router } = require("express");
const { getBusquedas } = require("../controllers/busqueda.controller");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();

// Listar Documentos encontrados
router.get( '/:buscar',
    [
        validarJWT
    ],
    getBusquedas
);

module.exports = router;