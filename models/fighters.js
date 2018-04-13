
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fighterSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: false
    },
    image: {
        type: String,
        required: [true, "name is required"],
        unique: false
    }
    
});

const Fighter = mongoose.model("Fighter", fighterSchema);

module.exports = User;