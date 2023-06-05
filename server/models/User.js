import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        pic: {
            type: String
        },
        username: {
            type: String
        },
    }
);

const users = mongoose.model('users', userSchema);

export default users;