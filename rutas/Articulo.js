const express = require('express');
const router = express.Router();

//const Articulo = require('../modelos/Articulo');
const controller = require('../controladores/Articulo');

// rutas
router.get("/listar-articulo", controller.listar);
router.post("/crear-articulo", controller.crear);


module.exports = router;