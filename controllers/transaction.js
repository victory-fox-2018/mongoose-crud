'use strict'

const Transaction = require('../models/transaction');
const ObjectId = require('mongodb').ObjectID;

class TransactionController {

    // insert data
    static insertData(req,res){
        const newTransaction = new Transaction({
            member : req.body['member'],
            days : req.body['days'],
            // out_date : req.body['out_date'],
            // due_date : req.body['due_date'],
            // in_date : req.body['in_date'],
            fine  : req.body['fine'],
            booklist : req.body['booklist']
        })
        newTransaction.save()
        .then(row =>{
            res.status(200).json({msg : 'Data has been saved'});
        })
        .catch(err =>{
            res.status(500).json({msg : err});
        })
    }

    // get all data
    static getAllData(req,res){
        Transaction.find({}).populate('booklist')
           .then(data =>{
                res.status(200).json({data : data});
           })
           .catch(err =>{
                res.status(500).json({msg : err});
           }) 
    }

    // delete data
    static deleteData(req,res){
        let deleteId = ObjectId(req.params.id)

        Transaction.deleteOne({_id : deleteId})
            .then(row =>{
                res.status(200).json({msg : 'Data has been deleted'})
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }

}

module.exports = TransactionController