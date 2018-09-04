const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    memberid: { type: Schema.Types.ObjectId, ref: 'Customer' },
    days: Number,
    outDate: {
        type: Date,
        default: Date.now
    },
    duoDate:{
        type: Date,
        default: Date.now
    },
    inDate:{
        type: Date,
        default: Date.now
    },
    fine:{
        type: Number,
        required: [true, 'zipcode is required']
    },
    bookList: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
},{
    timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction