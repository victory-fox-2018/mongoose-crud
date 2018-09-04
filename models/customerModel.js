const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer = new Schema({ 
    name: {
        type: String,
        required: true
    },
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
},{
    timestamps:true     
});


const Customer = mongoose.model('Customer', customer);
module.exports = Customer