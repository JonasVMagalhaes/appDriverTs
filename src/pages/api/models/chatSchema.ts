import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    users: {
        type: Array,
        require: true
    },
    messages: {
        type: Array,
        require: true
    }
})

const chatSchema = mongoose.models.users || mongoose.model("chat", Schema);

export default chatSchema;