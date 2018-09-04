const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member: 
        { ref: "Customer", type: Schema.Types.ObjectId },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [
        { ref: "Book", type: Schema.Types.ObjectId }
    ]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction