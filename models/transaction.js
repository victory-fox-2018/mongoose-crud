const mongoose = require('mongoose');
const Schema = mongoose.Schema

let trnsSchema =  new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Customer' },
    days: Number,
    out_date: Date,
    due_date: Date,    
    in_date: Date, 
    fine: Number,
    booklist: [
        { type: Schema.Types.ObjectId, ref: 'Book' }
    ]
})

trnsSchema.pre('save', function(next) {
    this.out_date = new Date()
    this.due_date = new Date()
    this.in_date = new Date()
    this.due_date.setDate(this.out_date.getDate()+ this.days);
    this.in_date.setDate(this.due_date.getDate() + 2 )
    next()
})

let Transaction = mongoose.model('Transaction', trnsSchema)
module.exports = Transaction