const mongoose = require('mongoose')
const Schema = mongoose.Schema

var customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    memberid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
        timestamps: true
    })

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer