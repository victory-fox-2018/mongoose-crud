var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var CustomerSchema   = new Schema({
     name: String,
     memberid: String,
     address: String,
     zipcode: String,
     phone: String
},{
  timestamps : true
});

module.exports = mongoose.model('Customer', CustomerSchema);