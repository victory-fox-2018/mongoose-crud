const ObjectId = require('mongodb').ObjectId;
const Transaction = require('../models/transactionModel')
const DueDateAndFine = require('../helpers/dueDateAndFine')

class TransactionController {

    static showAll(req, res) {
        Transaction.find({}).
        populate('booklist').
        populate('member').
        exec((err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static showOne(req, res) {
        Transaction.findById(ObjectId(req.params.id)).
        populate('booklist').
        populate('member').
        exec((err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static add(req, res) {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: DueDateAndFine.due_date(req.body.out_date, req.body.days),
            in_date: req.body.in_date,
            fine: DueDateAndFine.fine(req.body.out_date, req.body.in_date, req.body.days),
            booklist: req.body.booklist
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Transaction of book '${req.body.booklist}' by member '${req.body.member}' added`})
            }
        })
    }

    static edit(req, res) {
        Transaction.updateOne({
            _id: ObjectId(req.params.id)
        },{
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Transaction with id: '${req.params.id}' updated`})
            }
        })
    }

    static destroy(req, res) {
        Transaction.deleteOne({
            _id: ObjectId(req.params.id)
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Transaction with id: '${req.params.id}' deleted`})
            }
        })
    }
}

module.exports = TransactionController