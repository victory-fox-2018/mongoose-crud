
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    memberid : {type : Schema.Types.ObjectId, ref: 'Customer'},
    days : Number,
    outDate : Date,
    duoDate :Date,
    inDate : Date,
    fine : Number,
    bookList : [{type : Schema.Types.ObjectId, ref: 'Book'}]
 
},{
    timestamps : true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction