require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS - middleware
app.use(cors());

// Lectura y parseo del body
app.use( express.json() );

// Base de Datos
dbConnection();

// Rutas
app.use( '/api/login', require('./routes/auth.routes') );
app.use( '/api/todo', require('./routes/busqueda.routes') );
app.use( '/api/usuario', require('./routes/usuario.routes') );
app.use( '/api/clinica', require('./routes/clinica.routes') );
app.use( '/api/medico', require('./routes/medico.routes') );

app.listen(process.env.PORT, () => {
    console.log('Server node iniciado en puerto ' + process.env.PORT);
})