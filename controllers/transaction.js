const Transaction = require('../models/transaction')

const addTransaction = function (req, res) {
    let { days, out_date, due_date, in_date, fine, member, booklist } = req.body
    Transaction.create({
        days: days,
        out_date: out_date,
        due_date: due_date,
        in_date: in_date,
        fine: fine,
        member: member,
        booklist: booklist
    })
        .then(function (newTransaction) {
            res.status(200).json({
                message: "add Transaction succes",
                data: newTransaction
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "add Transaction failed",
                error: err.message
            })
        })
}

const getAllTransaction = function (req, res) {
    Transaction.find({})
        .populate(['member','booklist'])
        .then(function (Transactions) {
            res.status(200).json({
                message: "data found",
                data: Transactions
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "error get data",
                error: err.message
            })
        })
}

const getOneTransaction = function (req, res) {
    Transaction.findOne({
        _id: req.params.id
    })
        .populate(['member','booklist'])
        .then(function (Transaction) {
            res.status(200).json({
                message: "data Transaction found",
                data: Transaction
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "error get data Transaction",
                error: err.message
            })
        })
}

const deleteTransaction = function (req, res) {
    Transaction.deleteOne({ _id: req.params.id })
        .then(function () {
            res.status(200).json({
                message: "delete success"
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "delete failed",
                error: err.message
            })
        })
}

const updateTransaction = function (req, res) {
    let { days, out_date, due_date, in_date, fine, memberid, booklist } = req.body
    let objForUpdate = {}
    if (days) objForUpdate.days = days
    if (out_date) objForUpdate.out_date = out_date
    if (due_date) objForUpdate.due_date = due_date
    if (in_date) objForUpdate.in_date = in_date
    if (fine) objForUpdate.fine = fine
    if (memberid) objForUpdate.memberid = memberid
    if (booklist) objForUpdate.booklist = booklist
    var setObj = { $set: objForUpdate }

    Transaction.updateOne({ _id: req.params.id }, setObj)
        .then(function (Transaction) {
            res.status(200).json({
                message: "update success",
                data: Transaction
            })
        })
        .catch(function (err) {
            res.status(400).json({
                message: "update failed",
                error: err.message
            })
        })
}

module.exports = { addTransaction, getAllTransaction, getOneTransaction, deleteTransaction, updateTransaction }