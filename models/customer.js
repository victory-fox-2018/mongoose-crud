const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name:  {
        type: String,
        required: [true, 'is required']
    },
    memberid: {
        type: String,
        required: [true, 'is required']
    },
    address: {
        type: String,
        required: [true, 'is required']
    },
    zipcode:{
        type: Number,
        required: [true, 'is required']
    },
    phone: {
        type: String,
        validate: {
        validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    }
}, {
    timestamps : true
})

// var mongooseIntlPhoneNumber = require('mongoose-intl-phone-number');
 
// customerSchema.plugin(mongooseIntlPhoneNumber, {
//     hook: 'validate',
//     phone: 'phoneNumber',
//     phone: 'nationalFormat',
//     phone: 'internationalFormat'
// });

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer