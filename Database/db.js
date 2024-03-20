import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();



export const connection = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL,{
            tls: true,
            tlsAllowInvalidCertificates: true
        })
        console.log('Conectado a MongoBD')
    } catch (error) {
        console.log('Error de conexion a MongoBD:',err);

    }
};