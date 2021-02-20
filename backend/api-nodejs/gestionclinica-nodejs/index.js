require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS - middleware
app.use(cors());

// Base de Datos
dbConnection();

// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
//app.use( '/api/login', require('./routes/auth') );

app.listen(process.env.PORT, () => {
    console.log('Serve node iniciado en puerto ' + process.env.PORT);
})