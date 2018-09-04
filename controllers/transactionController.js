const Transaction = require('../models/transaction')

module.exports = {

    createTransaction: function(req, res) {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: []
        })
        .then(() => {
            res.status(200).json({
                msg: 'create success'
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        })
    },

    getAllTrasaction: function(req, res) {
        Transaction.find({})
        .populate('member')
        // .populate(['member', 'booklist'])
        .then((result) => {
            res.status(200).json({
                msg: "Data all transaction",
                result
            })
        }).catch((err) => {
            res.status(500).json({
                msg: err.message
            })
        });
    },

    updateTrasaction: function(req, res) {
        let id = req.params.id
        let objTransaction = {}
        if(req.body.member) objTransaction.member = req.body.member;
        if(req.body.days) objTransaction.days = req.body.days;
        if(req.body.out_date) objTransaction.out_date = req.body.out_date;
        if(req.body.due_date) objTransaction.due_date = req.body.due_date;
        if(req.body.in_date) objTransaction.in_date= req.body.in_date;
        if(req.body.fine) objTransaction.fine= req.body.fine;

      Transaction.updateOne(
            { _id: id },
            { $set: objTransaction,
              $push: {booklist: req.body.booklist} 
            }
        )
        .then((result) => {
            res.status(200).json({
                msg: 'update success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    deleteTranscation: function(req, res) {
        let id = req.params.id
        Transaction.deleteOne({ _id: id })
        .then((result) => {
            res.status(200).json({
                msg: 'delete success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    }

}