const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    days: "number",
    out_date: {type: Date, default: Date.now} ,
    due_date: {type: Date, default: Date.now},
    in_date: {type: Date, default: Date.now},
    fine: "number",
    booklist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model('Transaction', schema);