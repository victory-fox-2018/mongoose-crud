const Transaction = require('../models/transaction')

const createTransaction = (req, res) => {
    Transaction.create({
        member: req.body.member,
        days: req.body.days,
        fine: req.body.fine,
        booklist: req.body.booklist
    })
    .then((data) => {
        res.status(201).json({
            msg: `success create new transaction`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const findAllTransaction = (req, res) => {
    Transaction.find({})
    .populate('member')
    .populate('booklist')
    .exec( function(err, response){
        if (err) {
            res.status(400).json({
                msg: err.message
            })
        } else {
            res.status(201).json({
                response
            })
        } 
    })
}

const updateTransaction = (req, res) => {

    const {member, days, out_date, due_date, in_date, fine, booklist} = req.body
    let dataUpdate = {}

    if(member) dataUpdate.member = member
    if(days) dataUpdate.days = days
    if(out_date) dataUpdate.out_date = out_date
    if(in_date) dataUpdate.in_date = in_date
    if(booklist) dataUpdate.booklist = booklist
    
    Transaction.updateOne({
        _id: req.params.id
    }, dataUpdate)
    .then(() => {
        res.status(201).json({
            msg: `success update Transaction's data`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const deleteTransaction = (req, res) => {
    Transaction.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(201).json({
            msg: `success delete Transaction's data`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

module.exports = {
    createTransaction,
    findAllTransaction,
    updateTransaction,
    deleteTransaction
};


