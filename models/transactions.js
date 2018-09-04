const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const transScheme = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    out_date: {
        type: Date,
        required: true,
        default : Date.now
    },
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transScheme)
module.exports = Transaction