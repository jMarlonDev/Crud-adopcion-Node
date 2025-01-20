/* Este archivo es super importante ya que es aquí donde se van a manejar 
 * las solicitudes que provienen del cliente y vamos a definir las respuestas que se 
 * van a responder
*/

import modelMascotas from "../models/modelMascotas.js"
const getAll = async (request, response) => {
  try {

    const data = await modelMascotas.getAll();
    response.json(data)
  } catch (error) {
    console.log(error)
  }
}


const getId = async (request, response) => {
  const { id } = request.params;
  try {

    const data = await modelMascotas.getOne(id);
    response.json(data)

  } catch (error) {
    console.log(error)
  }
}

const create = async (request, response) => {
  try {
    const data = await modelMascotas.create(request.body);
    response.json(data);
  } catch (error) {
    console.log(error)
  }
}

const update = async (request, response) => {
  const { id } = request.params;
  try {
    const { _id, ...updateData } = request.body;
    const data = await modelMascotas.update(id, updateData)
    response.json(data);
  } catch (error) {
    console.log(error)
  }
}

const deleteElement = async (request, response) => {
  try {
    const { id } = request.params;
    const data = await modelMascotas.deleteOne(id)
    response.json(data);
  } catch (error) {
    console.log(error)
  }
}

export default { getAll, getId, create, update, deleteElement }

