const mongoose = require('mongoose');
const Schema = mongoose.Schema

let customerSchema = new Schema({
    name: String,
    member_id: String,
    address: String,
    zipcode: String, 
    phone: String
})

let Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer