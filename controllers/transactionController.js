const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Transaction= require('./../models/transaction')
const objId= require('mongodb').ObjectID

module.exports = {

    createOne: function(req,res){
        const newTransaction = new Transaction ({
            member: req.body.member,
            days: req.body.days,
            out_date: new Date,
            Transactionlist: req.body.Transactionlist
        })

        newTransaction.save(function (err) {
            if (!err) {
                res.status(200).json({
                    msg: "New data has been added"
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }
          });
    },

    findAll: function(req,res){
        Transaction.find().
            populate('member').
            populate('Transactionlist').
            exec(function(err,data) {
                if (!err) {
                    res.status(200).json({
                        data: data
                    })
                }else {
                    res.status(500).json({
                        msg: err.message
                    })
                }    
            })
    },

    updateOne: function(req,res){
        // let returnDate= req.body.in_date
        // let dueDate= this.due_date
        // let fineAmount= (returnDate-dueDate)*500

        let newUpdate= {
            in_date: req.body.in_date,
            fine: req.body.fine
        }
        
        Transaction.updateOne({_id: objId(req.params.id)},newUpdate,function(err,data){
            if (!err) {
                res.status(200).json({
                    msg: "Data has been updated",
                    data: data
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }  
        })
    },

    deleteOne: function(req,res){
        Transaction.deleteOne({_id: objId(req.params.id)}, function (err) {
            if (!err) {
                res.status(200).json({
                    msg: "Data has been deleted"              
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }  
        })

    }

}