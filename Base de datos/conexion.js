const mongoose = require("mongoose");
  
const conexion = async()=>{
    try{

        mongoose.set("strictQuery", false);
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });

        console.log("conectado a la base de datos");

    }catch(error){
        console.log(error);
        throw new Error("no se puede conectar a la base de datos");
    }
}

module.exports = {conexion}
