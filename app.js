import express from 'express';
import dotenv from 'dotenv';
import connection from './Database/db.js';

const app = express();
const port = process.env.PORT;
dotenv.config();

// conexion bd
connection();

app.get('/', (req, res) => {
    res.send('Si');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('http://localhost:3000/');
});
