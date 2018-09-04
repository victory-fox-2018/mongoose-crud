const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    memberid:{
        type: String,
        required: [true, 'memberid is required']
    },
    address:{
        type: String,
        required: [true, 'address is required']
    },
    zipcode:{
        type: String,
        required: [true, 'zipcode is required']
    },
    phone:{
        type: String,
        required: [true, 'phone is required']
    }
},{
    timestamps: true
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer