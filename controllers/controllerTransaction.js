const Transaction = require('../models/modelTransaction')


module.exports = {

    getAllTransaction: (req, res) => {
        Transaction.find()
            .then(Transaction => {
                res.status(200).json({
                    message: 'Show all Transactions',
                    data: Transaction
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed get all Transactions',
                    err: err.message
                })
            })
    },

    addTransaction: (req, res) => {
        Transaction.create({
            memberid: req.body.memberid,
            days: req.body.days,
            fine: req.body.fine,
            bookList: req.body.bookList

        })
            .then(Transaction => {
                res.status(201).json({
                    message: 'Success add Transaction',
                    data: Transaction
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },

    findOneTransaction: (req, res) => {
        Transaction.findOne({ _id: req.params.id })
            .populate("memberid")
            .then(Transaction => {
                res.status(200).json({
                    data: Transaction
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    },

    removeTransaction: (req, res) => {
        Transaction.deleteOne({ _id: req.params.id })
            .then(cusotmer => {
                res.status(200).json({
                    message: 'Transactions has been remove',
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    },

    updateTransaction: (req, res) => {
        let where = { _id: req.params.id }
        let value = {
            $set: {
                memberid: req.body.memberid,
                days: req.body.days,
                fine: req.body.fine,
                bookList: req.body.bookList
            }
        }
        Transaction.updateOne(where, value)
            .then(Transaction => {
                res.status(200).json({
                    message: `Transaction has been updated`,
                    data: Transaction
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    }


}