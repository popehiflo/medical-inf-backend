const Usuario = require('../models/usuario');


const getUsuarios = async(req, res) => {

    res.json({
        ok: true,
        usuarios: 'Usuarios ...'
    });

}

const crearUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok: true,
        usuario
    });
}

module.exports = {
    getUsuarios,
    crearUsuario,
}