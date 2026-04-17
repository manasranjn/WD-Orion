const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('User', userSchema)