import mongoose from 'mongoose';

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.554e4.mongodb.net/mosaicofy`);

let db = mongoose.connection;

export default db;