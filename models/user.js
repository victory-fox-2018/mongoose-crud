const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName : String,
    memberId : String,
    address : String,
    zipcode : String,
    phone : String
},{
    timestamps : true
})

const User = mongoose.model('User', userSchema)

module.exports = User