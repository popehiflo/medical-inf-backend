const { response } = require('express');
const ClinicaModel = require('../models/clinica.model');


const getClinicas = async (req, res = response) => {

    // Listar Clinicas - populate para obtener mas datos de usuario (query)
    // const clinicas = await ClinicaModel.find()
    const clinicas = await ClinicaModel.find({})
                            .populate('usuario','nombre img');

    res.status(200).json({
        ok: true,
        clinicas
    })
}

const createClinica = async (req, res = response) => {

    // uid del usuario que viene el token
    const uid = req.uid;
    // pasar el uid y resto que llega en el req.body para la nueva clinica
    const nuevaClinica = new ClinicaModel({
        usuario: uid,
        ...req.body
    });

    try {
        const clinica = await nuevaClinica.save();

        res.status(200).json({
            ok: true,
            clinica
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