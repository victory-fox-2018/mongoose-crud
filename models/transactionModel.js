const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaction = new Schema({ 
    member: String,
    days: Number,
    out_date: {type: Date, default: Date.now},
    in_date: {type: Date, default: null},
    fine: Number,
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book'}]
},{
    timestamps:true,
    versionKey: false     
});


const Transaction = mongoose.model('Transaction', transaction);
module.exports = Transaction