const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId 
  },
  days: {
    type: Number,
    required: [true, 'Days is required']
  },
  outDate: Date,
  dueDate: Date,
  inDate: Date,
  fine: {
    type: Number,
    required: [true, 'Fine is required']
  },
  booklist: { type: Schema.Types.ObjectId, ref: 'Book'}
}, {
  timestamps: true
});

transactionSchema.methods.generateDueDate = function(max) {
  let monthsMaxDate = [
    31, 29, 31, 30, 
    31, 30, 31, 31,
    30, 31, 30, 31
  ];
  
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  
  let result;

  if(date + max > monthsMaxDate[month]) {
    let nextDate = (date + max) - monthsMaxDate[month];
    result = new Date(`${year}-${month + 2}-${nextDate}`);
  } else {
    result = new Date(`${year}-${month}-${date + max}`);
  }

  return result;
}

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;