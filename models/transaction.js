'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    member :{
        type : Schema.Types.ObjectId,
        ref : 'customer'
    },
    days : {
        type : Number
    },
    out_date : { 
        type : Date,
        default : new Date()
    },
    due_date : {
        type : Date,
        default : new Date()
    },
    in_date : {
        type : Date,
        default : new Date()
    },
    fine : {
        type : Number
    },
    booklist : [{type: Schema.Types.ObjectId, ref : 'book'}]
},{
    timestamps : true
})

const Transaction = mongoose.model('transaction',TransactionSchema);

module.exports = Transaction