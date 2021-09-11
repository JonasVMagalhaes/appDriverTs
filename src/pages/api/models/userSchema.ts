import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, "Please, add a name to your user"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please add a email to your user"],
        unique: true,
        trim: true
    },
    profile: {
        type: String,
        required: [true, "Please, add a profile to your user"],
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

const userSchema = mongoose.models.users || mongoose.model("users", Schema);

export default userSchema;