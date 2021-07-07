const Book = require('../models/Book')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getAll: function(req,res){
        Book.find()
            .then(books =>{
                res.status(200).json({
                    message: `Success Find All Books`,
                    data: books
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    getBook: function(req,res){
        if(req.params.id.length !== 24){
            res.status(404).json({
                message: "Book Not Found"
            })
        }else{
            Book.findById(ObjectId(req.params.id))
                .then(book =>{
                    if(book){
                        res.status(200).json({
                            message: "Found It",
                            data: book
                        })
                    }else{
                        res.status(404).json({
                            message: "Book Not Found"
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).json({
                        message: err.message
                    })
                })
        }
    },

    createBook: function(req,res){
        let newBook = new Book(req.body)

        newBook.save()
               .then(book =>{
                   res.status(200).json({
                       message: "Sucess Insert New Book",
                       data: book
                   })
               })
               .catch(err =>{
                   res.status(500).json({
                       message: err.message
                   })
               })
    },

    deleteBook: function(req,res){
        Book.deleteOne({ _id: { $eq: ObjectId(req.params.id)} })
            .then(() =>{
                res.status(200).json({
                    message: "Sucessfully Delete"
                })
                // res.send(book)
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    updateBook: function(req,res){
        Book.findByIdAndUpdate(ObjectId(req.params.id), req.body)
            .then(updatedBook =>{
                res.status(200).json({
                    message: "Sucessfully Update",
                    data: updatedBook
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    }
}