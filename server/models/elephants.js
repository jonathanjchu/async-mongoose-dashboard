const mongoose = require("mongoose");

const ElephantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
}, {timestamps: true});

mongoose.model("Elephant", ElephantSchema);