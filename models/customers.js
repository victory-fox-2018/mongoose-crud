const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    name: "string",
    memberId: "string",
    address: "string",
    zipcode: "string",
    phone: "string" 
}, {
    timestamps: true
});


module.exports = mongoose.model('Customer', schema);