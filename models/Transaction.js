const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  member: {
    type: {type: Schema.Types.ObjectId, ref: 'Customer'}
  },
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    default: Date.now
  },
  in_date: {
    type: Date,
    default: Date.now
  },
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId, ref: 'Book'
  }]
})

transactionSchema.pre('save', function(next) {
  this.due_date = new Date().setDate(this.due_date.getDate() + this.days)
  this.in_date = new Date().setDate(this.in_date.getDate() + this.days + 2)
  next()
})

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction