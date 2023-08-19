import { MONGO_CONNECTION_LINK } from '../config/config.js';
import { set, connect } from 'mongoose';


export async function connectMongoDB() {
    const linkMongoDB = MONGO_CONNECTION_LINK;

    set('strictQuery', false); // Para que no de error al hacer una consulta con un campo que no existe en la base de datos

    connect(linkMongoDB)
    .then(() => {
        console.log('Conexion correcta a mongoDB');
    })
    .catch((e) => {
        console.error(`Error ${e}`);
    });
}