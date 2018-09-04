const Transaction     = require('../models/transaction')
const ObjId           = require('mongodb').ObjectId
const { convertDate, helperDueDate } = require('../helpers')

module.exports = {

    findAll: function(req,res){
        Transaction.find() 
        .populate('member', 'id')
        .populate('booklist', 'id')
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

        let temp = null

        if(typeof req.body.booklist == 'object'){
            temp = req.body.booklist
        } else {
            temp = [req.body.booklist]
        }

        let remains = Math.ceil(convertDate(req.body.in_date) - helperDueDate(convertDate(req.body.out_date), req.body.days)) / 86400000
        let payup   = (remains * temp.length) * 500

        let data = {
            member   : req.body.member,
            days     : req.body.days,
            out_date : convertDate(req.body.out_date),
            due_date : helperDueDate(convertDate(req.body.out_date), req.body.days),
            fine     : payup,
            in_date  : convertDate(req.body.in_date),
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
    
        Transaction.findById(ObjId(req.params.id))
        .then( data => {

            let temp = data.booklist.length
            let remains = Math.ceil(convertDate(req.body.in_date) - helperDueDate(convertDate(req.body.out_date), req.body.days)) / 86400000
            let payup   = (remains * temp) * 500

            let dataUpdate = {
                days     : req.body.days,
                out_date : convertDate(req.body.out_date),
                due_date : helperDueDate(convertDate(req.body.out_date), req.body.days),
                fine     : payup,
                in_date  : convertDate(req.body.in_date)
            }

            Transaction.update(
                { _id : ObjId(req.params.id) }
                ,dataUpdate)
            .then( () => {
                res.status(200).json({
                    transactions : data
                })
            })
            .catch( err => {
                res.status(500).json({
                    error : err.message
                }) 
            })
        })
        .catch( err => {
            res.status(500).json({
                error : err.message
            }) 
        })

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