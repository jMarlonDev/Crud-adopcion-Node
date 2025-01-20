
import "dotenv/config"// linea de importacion para poder usar las variables de configuración
import mongoose from "mongoose";
class dbClient {
  constructor() {
    this.connectDB()
  }

  async connectDB(){
    const queryString= `mongodb+srv://adopcion:${process.env.PASSWORD}@${process.env.SERVER_DB}/adopcionMascotas?retryWrites=true&w=majority`;  
    await mongoose.connect(queryString);
  }

  async disconnectDB () {
    try {
      await mongoose.disconnect();
      console.log("desconectando de la base de datos")
      
    } catch (error) {
     console.log(error) 
    }
  }
}

export default new dbClient();
