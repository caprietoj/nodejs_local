const mongoose = require("mongoose");
  
const conexion = async()=>{
    try{

        mongoose.set("strictQuery", false);
        await mongoose.connect("mongodb+srv://caprietoj:Cprieto88@cluster0.zzhde9x.mongodb.net/blog", {
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
