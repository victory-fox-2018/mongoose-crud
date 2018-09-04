var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var BookSchema   = new Schema({
     isbn: {
      type : String,
      required : true
    },
     title: {
      type :String,
      required : true
    },
     author: String,
     category: String,
     stock: Number
},{
  timestamps : true
});

module.exports = mongoose.model('Book', BookSchema);