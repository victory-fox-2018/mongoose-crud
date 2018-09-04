const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaction = new Schema({ 
    member: { type: Schema.Types.ObjectId, ref: 'Customer'},
    days: Number,
    out_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book'}]
},{
    timestamps:true     
});


const Transaction = mongoose.model('Transaction', transaction);
module.exports = Transaction