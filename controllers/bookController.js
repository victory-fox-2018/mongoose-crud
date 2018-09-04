const Book = require('../models/book')

module.exports = {

    createBook: function(req, res) {
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
        .then((result) => {
            res.status(200).json({
                msg: 'create success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    getAllBook: function(req, res) {
        Book.find({}).sort({ title: 1 })
        .then((result) => {
            res.status(200).json({
                msg: 'data all books',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    updateBook: function(req, res) {
        let id = req.params.id
        let objBook = {}
        if(req.body.isbn) objBook.isbn = req.body.isbn;
        if(req.body.title) objBook.title = req.body.title;
        if(req.body.author) objBook.author = req.body.author;
        if(req.body.category) objBook.category = req.body.category;
        if(req.body.stock) objBook.stock = req.body.stock;

        Book.updateOne(
            { _id: id },
            { $set: objBook }
        )
        .then((result) => {
            res.status(200).json({
                msg: 'update success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    deleteBook: function(req, res) {
        let id = req.params.id
        Book.deleteOne({ _id: id })
        .then((result) => {
            res.status(200).json({
                msg: 'delete success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    }

}