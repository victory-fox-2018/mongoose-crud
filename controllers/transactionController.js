const Transaction = require('../models/transaction')
const dateChanger = require('../helpers/dateChanger')
const fineCalculator = require('../helpers/fineCalculator')
const dateCalculator = require('../helpers/dateCalculator')
const objId = require('mongodb').ObjectID

class TransactionController {

    static insert(req, res) {
    
        let totalBooks = 1
        
        if (typeof req.body.booklist === 'object') {
            totalBooks = req.body.booklist.length
        }
        
        let data = {
            member : req.body.member,
            days : req.body.days,
            outDate : dateChanger(req.body.outDate), //KAPAN DIA MINJEM
            dueDate : dateCalculator(dateChanger(req.body.outDate),req.body.days),//KAPAN SEHARUSNYA DIA BALIKIN
            inDate : dateChanger(req.body.inDate), // KAPAN DIA BALIKIN
            fine : fineCalculator(dateCalculator(dateChanger(req.body.outDate),req.body.days),req.body.inDate) * totalBooks,
            booklist : req.body.booklist
        }
        let transaction = new Transaction(data);
        transaction.save((err) => {
            if (!err) {
                res.status(201).json({
                    message : 'inserting transaction success',
                    userData : data 
                })
            } else {
                res.status(500).json({
                    message : err
                })
            }
        });
    }
    
    static update(req, res) {
        
        Transaction.updateOne({ "_id": objId(req.params.id) }, req.body, (err, result) =>  {
            if (!err) {
                res.status(201).json({
                    message : 'updating transaction success',
                    userData : result 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        })
    }

    static remove(req, res) {
        
        Transaction.deleteOne({ "_id": objId(req.params.id) },(err) => {
            if (!err) {
                res.status(200).json({
                    message : 'deleting transaction success'
                })
            } else {
                res.status(500).json({
                    message : 'deleting transaction failed'
                })
            }
        });
    }

    static findAll(req,res) {
        
        Transaction.find(). 
        populate('member').
        populate('booklist').
        exec ((err, transactions) => {
            if (!err) {
                res.status(200).json({
                    transactionsData : transactions 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        });
    }

}

module.exports = TransactionController