const Transaction = require('../models/Transaction');

const createObjectId = require('../helpers/createObjectId');
const errorHandling = require('../helpers/errorHandling');

class TransactionController {
  static findAll(req, res) {
    Transaction.find({}).populate('booklist')
      .then(transactions => {
        res.status(200).json({
          message: 'success get all transactions data',
          transactions: transactions
        });
      })
      .catch(err => {
        errorHandling(res, 500, err);
      });
  }

  static findById(req, res) {
    let id = createObjectId(req.params.id);
    Transaction.find({_id: id}).populate('booklist')
      .then(transaction => {
        res.status(200).json({
          message: 'success get transaction data',
          transaction: transaction
        });
      })
      .catch(err => {
        errorHandling(res, 500, err);
      })
  }

  static remove(req, res) {
    let id = createObjectId(req.params.id);
    Transaction.deleteOne({_id: id}, (err) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success delete data'
      });
    })
  }

  static update(req, res) {
    let id = createObjectId(req.params.id);
    let input = {
      member: createObjectId(req.body.member),
      days: req.body.days,
      outDate: new Date(),
      dueDate: new Date(),
      inDate: new Date(),
      fine: parseInt(req.body.fine),
      booklist: req.body.booklist
    };

    Transaction.updateOne({_id: id}, input, (err, affected) => {
      if(err) {
        errorHandling(res, 500, err);
      } else {
        res.status(200).json({
          message: 'success update data',
          affected: affected
        });
      }
    });
  }

  static create(req, res) {

    let input = {
      member: createObjectId(req.body.member),
      days: req.body.days,
      outDate: new Date(),
      dueDate: new Date(),
      inDate: new Date(),
      fine: parseInt(req.body.fine),
      booklist: req.body.booklist
    };

    // console.log(bookIdList, '<============== book list');

    let transaction = new Transaction(input);
    
    console.log(transaction);

    // console.log(transaction, '<=============== transaction');
    // transaction.dueDate = 'asdasd';
    // transaction.dueDate = transaction.generateDueDate();

    Transaction.create(input, (err, transaction) => {
      if(err) {
        errorHandling(res, 500, err);
      } else {
        res.json({
          message: 'success create new transaction',
          transaction: transaction
        });
      }
    });
  }
}

module.exports = TransactionController;