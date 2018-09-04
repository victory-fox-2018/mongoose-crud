const Transaction = require('../models/transaction')

module.exports = {
    addTransaction: (req, res) => {
        Transaction
            .create({
                memberid: req.body.memberid,
                days: req.body.days,
                fine: req.body.fine,
                bookList: req.body.bookList
            })
            .populate('bookList', 'title author')
            .populate('memberid', 'name address')
            .then(transaction => {
                res.status(200).json({
                    message: 'Add transaction success',
                    data: transaction
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    displayAllTransactions: (req, res) => {
        Transaction
            .find()
            .populate('bookList', 'title author')
            .populate('memberid', 'name address')
            .then(transactions => { 
                res.status(200).json({
                    message: 'Display all transactions success',
                    data: transactions,
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                }) 
            })
    },
    displaySingleTransaction: (req, res) => {
        Transaction
            .findOne({
                _id: req.params.id
            })
            .populate('bookList', 'title author')
            .populate('memberid', 'name address')
            .then(transaction => {
                res.status(200).json({
                    message: 'Display transaction success',
                    data: transaction,
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                }) 
            })
    },
    updateTransaction: (req, res) => {
        Transaction
            .findByIdAndUpdate({
                _id: req.params.id
            },{
                $set:{
                    days: req.body.days,
                    fine: req.body.fine
                }
            })
            .then(() => {
                Transaction
                    .findOne({
                        _id: req.params.id
                    })
                    .populate('bookList', 'title author')
                    .populate('memberid', 'name address')
                    .then((updatedTransaction) => {
                        res.status(201).json({
                            message: 'Update transaction success',
                            data: updatedTransaction,
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Id not found'
                }) 
            })
    },
    deleteTransaction : (req, res) => {
        Transaction
            .findOneAndDelete({
                _id: req.params.id
            })
            .then(deletedTransaction => {
                res.status(200).json({
                    message: `Delete transaction success`,
                    data: deletedTransaction
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Id not found'
                }) 
            })
    }
}