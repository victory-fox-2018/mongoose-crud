const Transactions = require('../models/Transactions')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    getAll: function(req,res){
        Transactions.find().populate('Customer')
            .then(transactions =>{
                res.status(200).json({
                    message: "Found All Transactions",
                    data: transactions
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },
    createTransaction: function(req,res){
        let newTransaction = new Transactions({
            member: ObjectId(req.body.member),
            days: req.body.days,
            fine: req.body.fine
        })

        let booklist = req.body.booklist

        if(typeof booklist === 'string'){
            newTransaction.booklist.push(ObjectId(booklist))
        }else{
            booklist.forEach(book =>{
                newTransaction.booklist.push(ObjectId(book))
            }) 
        }


        newTransaction.save()
            .then(transaction =>{
                res.status(200).json({
                    message: "Sucessfully Create Transaction",
                    data: transaction
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    getTransaction: function(req,res){
        if(req.params.id.length !== 24){
            res.status(404).json({
                message: "Transaction Not Found"
            })
        }else{
            Transactions.findById(ObjectId(req.params.id))
                .then(transaction =>{
                    if(transaction){
                        res.status(200).json({
                            message: "Found It",
                            data: transaction
                        })
                    }else{
                        res.status(404).json({
                            message: "Transaction Not Found"
                        })
                    }
                })
                .catch(err =>{
                    res.send(err)
                })
        }

    },

    deleteTransaction: function(req,res){
        if(req.params.id.length !== 24){
            res.status(404).json({
                message: "Transaction ID Not Found"
            })
        }

        Transactions.findByIdAndRemove(ObjectId(req.params.id))
            .then(success =>{
                res.status(200).json({
                    message: "Successfully Delete"
                })
            })
            .catch(err =>{
                res.send(err)
            })
    },

    updateTransaction: function(req,res){
        if(req.params.id.length !== 24){
            res.status(404).json({
                message: "Transaction ID Not Found"
            })
        }

        Transactions.findByIdAndUpdate(req.params.id, { days:req.body.days })
            .then(transaction =>{
                return transaction.save()
            })
            .then(success =>{
                res.status(200).json({
                    message: "Success Update"
                })
            })
            .catch(err =>{
                res.status(400).json({
                    message: err.message
                })
            })
    }
}