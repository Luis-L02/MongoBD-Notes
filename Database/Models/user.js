import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono: String,
    correo: String
})



export const user = mongoose.model('Usuario', userSchema);