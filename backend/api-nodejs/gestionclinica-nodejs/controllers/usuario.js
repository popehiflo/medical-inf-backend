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