const mongoose = require('mongoose')
const Schema = mongoose.Schema

var transactionSchema = new Schema({
    member: {
        ref: "Customer",
        type: Schema.Types.ObjectId
    },
    days: {
        type: Number,
        required: true
    },
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: {
        type: Number,
        required: true
    },
    booklist: [{
        ref: "Book",
        type: Schema.Types.ObjectId
    }]
}, {
        timestamps: true
    })

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction