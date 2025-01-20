
/*Aquí en este archivo vamos a definir las rutas a las cuales pueden acceder los usuarios 
 * para pedir consultas a nuestro servidor, el cual vamos a realizar 
 * y definir que cuando se acceda a las rutas pues se va a procesar 
 * las solicitudes y enviaremos una respuesta al cliente
*/
import express from "express";
import mascotasController from "../controllers/mascotas.js";
const route = express.Router();

/* Definicion de als rutas a las cuales el usuario puede acceder y hacer una solicitud y enviar el servidor 
 * respondera enviando una respuesta
*/

/*
 solicitud GET para obtener todos los datos que se tengan almacenados en la base de datos
 vamos a indicar en todas las solicitudes el acceso a la URL padre o raiz / 
 simplemente por la funcionaldiad se va a implementar en el archivo de server.js
 que luego va a redirigir a los diferentes solicitudes que se hagan en el servidor
*/
route.get("/", mascotasController.getAll);

/* 
 * solicitud  GET para obtener un solo dato en este caso indicamos en la url que se tiene que pasar 
 * un valor de id del dato que se quiere buscar que proviene de la solicitud que hace el cliente
*/
route.get("/:id", mascotasController.getId);

/* solicitud POST para crear un nuevo dato que es enviado desde el cliente y almancenado en el servidor*/
route.post("/", mascotasController.create);

/* solicitud PUT para actualizar un dato ya existente dentro del servidor 
 * indicando en la URL o solicitud del cliente el id del objeto que se quiere actualizar
*/
route.put("/:id",mascotasController.update);

/*solicitud DELETE para eliminar un dato ya existente dentro del servidor 
 * igualmente en la url de la solicitud que proviene del cliente se debe indicar el id del elemento a eliminar
*/
route.delete("/:id", mascotasController.deleteElement);

export default route;
