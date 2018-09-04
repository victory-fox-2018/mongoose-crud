const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member:{ type: Schema.Types.ObjectId, ref: 'Customer' },
    days: {
        type: Number,
        default: 0
    },
    out_date: Date,
    due_date: Date,
    in_date: {
        type: Date,
        default: null
    },
    fine: {
        type: Number,
        default: 0,
        minimum: 0
    },
    booklist:[{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {        
    timestamps : true
});

transactionSchema.pre('save', function(next) {
    let dueDate   = new Date()
    this.due_date = dueDate.setDate(dueDate.getDate()+this.days)
    next();
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction