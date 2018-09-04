const Book    = require('../models/book')
const ObjId   = require('mongodb').ObjectId

module.exports = {
    findAll: function(req,res){
        Book.find() 
        .then( data => {
            res.status(200).json({
                message : 'Books collecction',
                books : data
            })
        })
        .catch( err => {
            throw err;
        })
      
    },

    findBy: function(req,res){
        let title = req.params.code
        Book.find({ "title": { $regex: '.*' + title + '.*' } },
        function(err,data){
            if (!err) {
                res.status(200).json({
                    message : `searching from tittke book : ${title}`,
                    books : data
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
       });
    },

    insert: function(req,res){
        var array = [
            {   
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            }, 
        ];

        Book.create(array, function (err, data) {
            if (!err) {
                res.status(200).json({
                    message : `insert book success`
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
        });
    },

    update: function(req,res){

        Book.findByIdAndUpdate(req.params.id, 
            { 
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            }, 
        ((err,status) => {
            if (!err) {
                res.status(200).json({
                    message : `Update book success`
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
        }))
    },

    remove: function(req,res){
        Book.remove(
            { _id: ObjId(req.params.id) },
        function (err, status) {
            if(!err){
                res.status(200).json({
                    message : `delete book success`,
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