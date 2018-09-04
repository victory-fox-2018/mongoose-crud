const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trxSchema = new Schema ({
    member: { 
        type: String, ref:  'Customer' 
    },
    days: { 
        type: Number 
    },
    out_date: { 
        type: Date,
    },
    due_date: { 
        type: Date,
    },
    in_date: { 
        type: Date,
    },
    fine: { 
        type: Number 
    },
    booklist: [{
        type: String,
        ref: 'Book'
    }]
})

trxSchema.pre('save', function(next) {
    this.out_date = new Date()
    this.due_date = new Date()
    this.in_date = new Date()
    this.due_date.setDate(this.out_date.getDate() + this.days)
    this.in_date.setDate(this.out_date.getDate() + this.days + 2)
    // console.log('ini in date', this.in_date)
    // console.log('ini out date', this.out_date)
    // console.log('ini due date', this.due_date)
    next()
})

const Transaction = mongoose.model('Transaction', trxSchema)

module.exports = Transaction