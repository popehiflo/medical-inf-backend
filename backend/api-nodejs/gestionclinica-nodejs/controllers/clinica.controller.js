const { response } = require('express');
const Clinica = require('../models/clinica.model');


const getClinicas = (req, res = response) => {

    // Listar
    const clinicas = Clinica.find({});

    res.status(200).json({
        ok: true,
        clinicas
    })
}

const createClinica = async (req, res = response) => {

    // uid del usuario que viene el token
    const uid = req.uid;
    // pasar el uid y resto que llega en el req.body
    const clinica = new Clinica({
        usuario: uid,
        ...req.body
    });

    try {
        const clinicaBD = await clinica.save();

        res.status(200).json({
            ok: true,
            hospital: clinicaBD
        }); 
    } catch (error) {
        console.group('Error Crear Clinica');
        console.log(error);
        console.groupEnd();

        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
}

const updateClinica = (req, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'updateClinica'
    })
}

const deleteClinica = (req, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'deleteClinica'
    })
}

module.exports = {
    getClinicas,
    createClinica,
    updateClinica,
    deleteClinica
}