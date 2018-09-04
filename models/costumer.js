const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    memberId: {
        type: String,
        required: [true, 'member id is requeried']
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    zipcode: {
        type: Number,
        required: [true, 'zipcode is required']
    },
    phone: {
        type: Number, 
        required: [true, 'phone is required']
    }
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer