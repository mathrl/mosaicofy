import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://alura:123@cluster0.554e4.mongodb.net/mosaicofy");

let db = mongoose.connection;

export default db;