const validator = require("validator");
const Articulo = require("../modelos/Articulo");

const articlecontroller = (req, res)=>{
    return res.status(200).json({
        message: 'Articulo'
    });
}

const crear = (req, res)=>{

// recojer parametros
const params = req.body;
// validar
try {
    let validar_titulo = !validator.isEmpty(params.titulo) && validator.isLength(params.titulo, {min:5, max:undefined});
    let validar_contenido = !validator.isEmpty(params.contenido);

    if (! validar_titulo || ! validar_contenido) {
        throw new Error(" No se ha validado la informacion ");
    }

} catch (error) {
    return res.status(400).json({
        status:"error",
        message:'Error al validar los datos, faltan datos por enviar',
    })
}
    // crear y asignar valores al objeto
    const articulo = new Articulo(params);
    // guardar el articulo
    articulo.save((error, articuloguardado)=>{
        if (error || ! articuloguardado) {
            return res.status(400).json({
                status:"error",
                message:'Error al guardar el articulo',
            })
        }

    // devolver resultado
        return res.status(200).json({
        status: "success",
        articulo: articuloguardado,
        message: 'Articulo Creado'
    });
    });
}

    // listar articulos
    const listar = (req, res)=>{
          // find
          Articulo.find({}).exec((error, articulos)=>{
            if (error || ! articulos) {
                return res.status(400).json({
                    status:"error",
                    message:'Error al listar los articulos',
                })
            }
            // devolver resultado
            return res.status(200).json({
                status: "success",
                articulos,
                message: 'Articulos Listados'
            });
        });
    }

module.exports = {
    articlecontroller,
    crear,
    listar
};

