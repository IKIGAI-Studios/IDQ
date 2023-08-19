import { config } from 'dotenv';

config();

export const MONGO_CONNECTION_LINK = process.env.MONGO_CONNECTION_LINK; 
export const FILE_SERVER = process.env.FILE_SERVER; 