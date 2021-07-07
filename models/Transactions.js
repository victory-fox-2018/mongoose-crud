const mongoose = require('mongoose')
const setDate = require('../helpers/set-due-and-in-date')
const Schema = mongoose.Schema
const transactionSchema = new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Customer' },
    days: Number,
    out_date: { type: Date, default: Date.now },
    due_date: { type: Date, default: Date.now },
    in_date: { type: Date, default: Date.now },
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

transactionSchema.pre('save', setDate)


const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction