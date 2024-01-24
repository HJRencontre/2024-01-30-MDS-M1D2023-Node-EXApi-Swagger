const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let votingSessionSchema = new Schema({
    module_name: {
        type: String,
        required: true,
    },
    expiration_date: {
        type: Date,
        required: true,
    },
    musics_list: [{
        type: Schema.Types.ObjectId,
        ref: 'Music',
        required: true,
    }],
});

module.exports = mongoose.model('VotingSession', votingSessionSchema);