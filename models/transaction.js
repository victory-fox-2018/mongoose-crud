const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId, 
    ref: 'Book'
  }]}, {
  timestamps: true
});

transactionSchema.pre('save', function(next) {
  let due = new Date;
  due.setDate(due.getDate() + this.days);
  this.due_date = due;
})

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;