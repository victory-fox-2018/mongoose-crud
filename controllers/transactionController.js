const Transaction  = require('../models/transaction')
const ObjId           = require('mongodb').ObjectId

module.exports = {

    findAll: function(req,res){
        Transaction.find() 
        .then( data => {
            res.status(200).json({
                message : 'Data Transactions',
                Transactions : data
            })
        })
        .catch( err => {
            res.status(200).json({
                message : 'Data not found'
            }) 
        })
    },
    
    insert: function(req,res){

        let data = {
            member   : ObjId(req.body.member),
            days     : req.body.days,
            out_date : new Date,
            booklist : req.body.booklist
        }

        let running = new Transaction(data)

        running.save((err, data) => {
            if (!err) {
                res.status(200).json({
                    message : `insert transaction success`,
                    data : data
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
        });
    },

    update: function(req,res){

    },

    remove: function(req,res){
        Transaction.remove(
            { _id: ObjId(req.params.id) },
        function (err, status) {
            if(!err){
                res.status(200).json({
                    message : `delete transactions success`,
                    status : status
                })
            } else {
                res.status(500).json({
                    error : err.message
                })
            }
        });
    }
}