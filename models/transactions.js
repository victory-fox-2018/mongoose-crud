const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const transScheme = new Schema({
    member: {
        type: Schema.ObjectId,
        ref: 'Customer'
    },
    days: Number,
    out_date: Date,
    date_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.ObjectId,
        ref: 'Book'
    }]
});

const Transaction = mongoose.model('Transaction', transScheme)
module.exports = Transaction