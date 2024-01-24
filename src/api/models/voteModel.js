const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    musicId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    vote_date: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Vote', voteSchema);