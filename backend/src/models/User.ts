import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12
    }
});

const User = mongoose.model('User',userSchema);

export default User;