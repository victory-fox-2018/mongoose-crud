const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String
    },
    memberid: {
        type: String
    },
    address: {
        type: String
    },
    zipcode: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer