const Book = require('../models/book')

module.exports = {
    addBook: (req, res) => {
        Book
            .create({
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            })
            .then(book => {
                res.status(201).json({
                    message: `Add book success`,
                    data: book
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    displayAllBooks: (req, res) => {
        Book
            .find()
            .then(books => {
                res.status(200).json({
                    message: `Display all books success`,
                    data: books
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    displaySingleBook: (req, res) => {
        Book
            .findById(req.params.id)
            .then(book => {
                res.status(200).json({
                    message: `Display a book success`,
                    data: book
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Id not found'
                })
            })
    },
    updateBook: (req, res) => {
        Book
            .findOneAndUpdate({
                _id: req.params.id
            },{
                $set:{
                    isbn: req.body.isbn,
                    title: req.body.title,
                    author: req.body.author,
                    category: req.body.category,
                    stock: req.body.stock
                }
            })
            .then(() => {
                Book
                    .findOne({
                        _id: req.params.id
                    })
                    .then(bookUpdated => {
                        res.status(200).json({
                            message: `Update book success`,
                            data: bookUpdated
                        })
                    })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                }) 
            })
    },
    deleteBook : (req, res) => {
        Book
            .findOneAndDelete({
                _id: req.params.id
            })
            .then(deletedBook => {
                res.status(200).json({
                    message: `Delete book success`,
                    data: deletedBook
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                }) 
            })
    }
}