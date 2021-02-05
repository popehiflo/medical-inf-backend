const express = require('express');
require('dotenv').config();

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo!'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Serve node iniciado en puerto ' + process.env.PORT);
})