const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = mongoose.connection

const customerSchema = new Schema({
    name: String,
    memberId: String,
    address: String,
    zipcode: String,
    phone: {
        type: String,
        required: [ true, 'Phone Number Harus di Isi']
    }
},{
    timestamps: true
})

const Customer = db.model('Customer', customerSchema)

module.exports = Customer