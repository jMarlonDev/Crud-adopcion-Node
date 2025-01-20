
import { Schema, model } from "mongoose"

const mascotaSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    typePet: {
      type: String,
      required: true,
      enum: [
        "perro", "gato", "pato"
      ]
    },

    race: {
      type: String,
    },

    age: {
      type: Number,
      min: [0, "La edad no puede ser negativa"],
      max: [19, "la Edad no parece correcta"]
    },
    description: {
      type: String
    },
    adopted: {
      type: Boolean,
      default: false
    }
  },

  { timestamps: true }// los timestamps me permiten poder definir en mi esquema dos campos 
  // nuevos uno que es createAt la cual genera la fecha y hora exacta en que se creo un elemento
  // y el updateAt: que me permite tambien generar la fecha y hora exacta en que se actualizo por ultima vez 
  // el elemento
)

export default model("Mascotas", mascotaSchema)
