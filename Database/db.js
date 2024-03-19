import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


const connection = async () => {
    try {
        await client.connect();
        console.log('Connected to mongoBD');
    } catch (error) {
        console.log('Error connecting to MongoBD: ',error)
    }
}


export default connection;