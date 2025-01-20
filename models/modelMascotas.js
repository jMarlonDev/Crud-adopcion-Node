
import mongoose from "mongoose";
import Mascota from "../schemas/schemaMascota.js";

class mascotaModel {
  async create(mascota) {
    return await Mascota.create(mascota)
  }

  async getAll() {
    return await Mascota.find()
  }

  async getOne(id) {
    return await Mascota.findById(id);
  }

  async update(id, updateMascota) {
    return await Mascota.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, updateMascota, { new: true})
  }

  async deleteOne(id) {
    return await Mascota.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
  }

}

export default new mascotaModel;
