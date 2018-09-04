var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var TransactionSchema   = new Schema({
     member: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Customer'
    },
     days: Number,
     out_date: {
       type : Date,
       default : new Date()
     },
     due_date: {
      type : Date,
      default : new Date()
    },
     in_date: {
      type : Date,
      default : new Date()
    },
     fine: Number,
     booklist : [{
       type : mongoose.Schema.Types.ObjectId,
       ref : 'Book'
     }]
},
     {
       timestamps : true
});

module.exports = mongoose.model('Transaction', TransactionSchema);