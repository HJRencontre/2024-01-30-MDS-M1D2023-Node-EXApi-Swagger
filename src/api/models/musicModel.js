const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    musicId: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Music', musicSchema);