import express from 'express';
import dotenv from 'dotenv';
import {connection} from './Database/db.js';
import {user} from './Database/Models/user.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// conexion bd
connection();



//prueba de insercion
await user.create({
    nombre: "Luis",
    apellido: "Lopez",
    telefono: "si",
    correo: "si"
});

//await user.deleteMany({nombre:"Luis"}, console.log("Se borro"));

const personas = await user.find();
console.log(personas);

app.get('/', (req, res) => {
    res.sendFile('index.html',{root: __dirname + '/public'})

});

app.get('/api/personas', async(req,res)=>{
    try {
        res.json(personas);
    } catch (error) {
        console.error('Error al obtener personas:', error);
        res.status(500).json({error:"Error al obtener personas"})
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}/`);
});
