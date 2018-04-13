
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    p1Name: {
        type: String,
        required: [true, "p1 name is required"],
        unique: false
    },
    p2Name: {
        type: String,
        required: [true, " p2 name is required"],
        unique: false
    },
    winner: {
        type: String,
        require: true,
        unique: false
    },
    p1Wins: [{
        type: String,
        require: true,
        unique: false
    }],
    p2Wins: [{
        type: String,
        require: true,
        unique: false
    }]   
});

const Match = mongoose.model("Match", matchSchema);

module.exports = User;