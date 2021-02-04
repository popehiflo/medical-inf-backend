const express = require('express');

// Crear el servidor de express
const app = express();

app.listen(3000, () => {
    console.log('Serve node iniciado en puerto ' + 3000);
})