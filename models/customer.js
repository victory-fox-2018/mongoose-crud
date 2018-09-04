'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema ({

    name : {
        type : String,
        required : true
    },
    memberid : {
        type : String,
        required : true
    },
    address : {
        type : String
    },
    zipcode : {
        type : String
    },
    phone : {
        type : String
    }
},{
    timestamps : true
})

const Customer = mongoose.model('customer',CustomerSchema);

module.exports = Customer