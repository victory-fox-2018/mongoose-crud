const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer"},
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Book"
        }
    ]
})

var Transaction = mongoose.model('Transcation', transactionSchema)

module.exports = Transaction