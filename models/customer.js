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
        type : String,
        required : true
    },
    zipcode : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const Customer = mongoose.model('customer',CustomerSchema);

module.exports = Customer