const ObjectId = require('mongodb').ObjectID;
const Transaction = require('../models/transaction');

module.exports = {
  findAll: function(req,res) {
    Transaction.find()
      .populate('booklist')
      .populate('member')
      .exec(function(err, transactions) {
        if (!err) {
          res.status(200).json({
            message: 'find all success!',
            data: transactions
          })
        } else {
          res.status(500).json({
            message: err.message
          })
        }
      })
  },
  create: function(req,res) {
    let newTransaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    })

    newTransaction.save((err, transaction) => {
      if (!err) {
        res.status(201).json({
          message: 'new transaction created successfully!',
          data: transaction
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },
  remove: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    Transaction.deleteOne(id, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'transaction deleted successfully!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  },
  update: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    let objUpdate = req.body
    Transaction.updateOne(id, objUpdate, function(err, data) {
      if (!err) {
        res.status(200).json({
          message: 'transaction data updated!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  }
}
