const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Book= require('./../models/book')
const objId= require('mongodb').ObjectID


module.exports = {
    
    createOne: function(req,res){
        const newBook = new Book ({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })

        newBook.save(function (err) {
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
        Book.find(function(err,data) {
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
        let newUpdate= {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }
        
        Book.updateOne({_id: objId(req.params.id)},newUpdate,function(err,data){
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
        Book.deleteOne({_id: objId(req.params.id)}, function (err) {
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
