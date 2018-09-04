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
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{4}-\d{4}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    }
},{
    timestamps:true     
});


const Customer = mongoose.model('Customer', customer);
module.exports = Customer