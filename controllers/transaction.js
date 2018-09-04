const Transaction = require('../models/transaction');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
mongoose.connect('mongoodb://localhost:27017/library2', {
  useNewUrlParser: true
});

class Controller {
  static insert(req, res) {
    let newTransaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      booklist: req.body.booklist
    });

    // console.log(newTransaction);
    
  }

  static read(req, res) {
    Transaction
      .find({})
      .then(transaction => {
        res.status(200).json({
          message: 'transaction has been suucessfully loaded',
          data: transaction
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  

}

module.exports = Controller;