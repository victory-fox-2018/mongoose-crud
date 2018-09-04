const Transaction = require('../models/transaction')
const ObjectId = require('mongodb').ObjectID

module.exports = {
    createTransaction : function(req,res) {
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            booklist: req.body.booklist
        },function(err,docs){
            if (err) {
                res.status(500).json({
                    message : err.message
                })
            } else {
                res.status(200).json({
                    message: 'success',
                    data : docs
                })
            }
        })
    },

    updateTransaction : function(req,res) {
        let returnDate = new Date
        returnDate = returnDate.setDate(returnDate.getDate()+7)
        console.log(req.params.id)
        Transaction.update({ _id: new ObjectId(req.params.id) },{
            $set : {
                in_date: new Date(returnDate),
                fine: 1000
            }
        },function(err,data){
            if (err) {
                res.status(500).json({
                    message: err.message
                })
            } else {
                res.status(200).json({
                    transaction : data,
                    message: 'success'
                })
            }
        })
    },

    getAllTransaction : function(req,res) {
        Transaction.find(function(err,data){
            if (err) {
                res.status(500).json({
                    message : err.message
                })
            } else {
                Transaction.populate(data,{path:'member'},function(err,trans){
                    if (err) {
                        res.status(500).json({
                            message: err.message
                        })
                    } else {
                        Transaction.populate(trans,{path:'booklist'},function(err,dataTrans){
                            if (err){
                                res.status(500).json({
                                    message : err.message
                                })
                            } else {
                                res.status(200).json({
                                    data : dataTrans
                                })
                            }
                        })
                    }
                })
            }
        })
    },

    deleteTransaction : function(req,res) {
        Transaction.remove({_id: new ObjectId(req.params.id)},function(err){
            if (err) {
                res.status(500).json({
                    message : err.message
                })
            } else {
                res.status(200).json({
                    message: 'success'
                })
            }
        })
    }
}
