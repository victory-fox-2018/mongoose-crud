const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    isbn : string,
    title : string,
    author : string,
    category : string,
    stock : Number
},{
    timestamps : true
})

const User = mongoose.model('User', userSchema)

module.exports = User