
/* 
 * Definimos en el archivo de package.json que para este 
 * proyecto queremos usar modulos de JS  e importamos el framework de express
 *
 * tambien vamos a importar el modulo de dontenv para poder usar las variables de configuración 
 * definidas en el archivo de .env
*/
import express from "express";
import "dotenv/config"// linea de importacion para poder usar las variables de configuración
import mascotasRoutes from "./routes/mascotas.js"
import dbClient from "./config/dbClient.js";
const app = express();

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

// Aquí se usan las rutas definidas en el archivo de rutas/mascotas
// agregando a cada peticion que antes tenía / como raiz le agregamos /mascotas para 
// que se pueda acceder a las respuestas que se puedan obtener
app.use("/mascotas", mascotasRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
  console.log("el puerto se prendío en" + PORT);
})

process.on("SIGINT", async () =>{
  dbClient.disconnectDB();
  process.exit(0)
})
