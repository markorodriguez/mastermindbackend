const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    score: Number
})

module.exports = userSchema

