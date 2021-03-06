const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    // Leer el Token
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }
    try {
        const { uid } = jwt.verify( token, process.env.JWT_SECRET_KEY );
        // A traves del request pasamos el uid al controlador
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}


module.exports = {
    validarJWT
}