const { response } = require("express");

const getBusquedas = async (req, res = response) => {
  // Listar Documentos encontrados
  const buscar = req.params.buscar;

  res.status(200).json({
    ok: true,
    msg: "getBusquedas",
    buscar,
  });
};

module.exports = {
  getBusquedas,
};
