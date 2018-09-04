const hash = require('../helpers/hashhelper')
const Transaction = require('../models/transactionModel')

module.exports = {
    
    createOne: (req, res) => {
        let objTransaction = {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }
        Transaction.create(objTransaction)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getAll: (req, res) => {
        Transaction.find()
        .populate('booklist')
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getOne: (req, res) => {
        Transaction.findById({_id:req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    updateOne: (req, res) => {
        let objTransaction = {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }
        Transaction.findByIdAndUpdate({_id: req.params.id}, objTransaction)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }, 

    deleteOne: (req, res) => {
        Transaction.findByIdAndDelete({_id: req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }
}