const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    days : Number,
    outDate : Date,
    dueDate : Date,
    inDate : Date,
    fine : Number,
    booklist : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
},{
    timestamps : true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction