const { response } = require('express');

const Usuario = require('../models/usuario');


const getUsuarios = async(req, res) => {

    // Listar solo campos que me interesan
    const usuarios = await Usuario.find({}, 'nombre email role google');

    res.json({
        ok: true,
        usuarios
    });

}

const crearUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({email});
        
        if ( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        const usuario = new Usuario(req.body);

        // Guardar Usuario
        await usuario.save();

        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.group('Error Guardar Usuario');
        console.log(error);
        console.groupEnd();
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Ver logs'
        });
    
    }
}

module.exports = {
    getUsuarios,
    crearUsuario,
}