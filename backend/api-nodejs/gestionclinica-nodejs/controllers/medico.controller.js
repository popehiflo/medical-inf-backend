const { response } = require('express');

const MedicoModel = require('../models/medico.model');


const getMedicos = async (req, res = response) => {

    // Listar
    const medicos = await MedicoModel.find({}, '')

    res.status(200).json({
        ok: true,
        medicos
    })
}

const createMedico = async (req, res = response) => {

    // uid del usuario que viene el token
    const uid = req.uid;
    // pasar uid que esta creando al nuevo medico
    const nuevoMedico = new MedicoModel({
        usuario: uid,
        ...req.body
    });

    try {
        const medico = await nuevoMedico.save();

        res.status(200).json({
            ok: true,
            medico
        });
    } catch (error) {
        console.group('Error Crear Medico');
        console.log(error);
        console.groupEnd();

        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
}

const updateMedico = (req, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'updateMedico'
    })
}

const deleteMedico = (req, res = response) => {


    res.status(200).json({
        ok: true,
        msg: 'deleteMedico'
    })
}

module.exports = {
    getMedicos,
    createMedico,
    updateMedico,
    deleteMedico
}