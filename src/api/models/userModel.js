const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: Boolean, // zero for admin, one for user
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);