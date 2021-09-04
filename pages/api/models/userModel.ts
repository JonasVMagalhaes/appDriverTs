import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    login: {
        type: String,
        required: [true, "Please add a title"],
        unique: true,
        trim: true
    },
    md5Password: {
        type: String,
        required: true
    },
    jwtPassword: {
        type: String,
        required: false
    }
})

const userSchema = mongoose.model("users", Schema);

export default userSchema;