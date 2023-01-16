const { conexion } = require("./Base de datos/conexion");
const express = require("express");
const cors = require("cors");

// conexion a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3000;
// configurar cors
app.use(cors());

// convertir el body json
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({extended: true})); // form-urlencoded

// crear servidor
app.listen(puerto, () =>{
    console.log(`servidor corriendo en el puerto ${puerto}`); 
} )


// importar rutas
const articulo = require("./rutas/Articulo");
// cargar la ruta
app.use("/api", articulo);


