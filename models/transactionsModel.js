var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var TransactionSchema   = new Schema({
     member: ObjectId,
     days: Number,
     out_date: Date,
     due_date: Date,
     in_date: Date,
     fine: Number,
     booklist : Array
},
     {
       timestamps : true
});

module.exports = mongoose.model('Transaction', TransactionSchema);