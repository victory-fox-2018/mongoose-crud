const Book = require('../models/modelBook')


module.exports = {

    getAllBook : (req, res) => {
        Book.find()
        .then(book => {
            res.status(200).json({
                message : 'Show all Books',
                data : book
            })
        })
        .catch(err => {
            res.status(500).json({
                message : 'Failed get all Books',
                err : err.message
            })
        })
    },

    addBook: (req, res) => {
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
        .then(book => {
            res.status(201).json({
                message : 'Success add book',
                data : book
            })
        })
        .catch(err => {
            res.status(500).json({
                message : err.message
            })
        })
    },

    findOneBook : (req, res) => {
        Book.findOne({_id : req.params.id})
        .then(book => {
            res.status(200).json({
                data : book
            })
        })
        .catch(err => {
            res.status(500).json({
                err : err.message
            })
        })
    },

    removeBook : (req,res) => {
        Book.deleteOne({ _id : req.params.id})
        .then(book => {
            res.status(200).json({
                message : 'books has been remove',
            })
        })
        .catch(err => {
            res.status(500).json({
                err : err.message
            })
        })
    },

    updateBook : (req,res) => {
        let where = { _id : req.params.id }
        let value = {
            $set : {
                isbn : req.body.isbn,
                title : req.body.title,
                author : req.body.author,
                category : req.body.category,
                stock : req.body.stock
            }
        }
        Book.updateOne(where, value)
        .then(book => {
            res.status(200).json({
                message : `Book has been updated`,
                data : book
            })
        })
        .catch(err => {
            res.status(500).json({
                err : err.message
            })
        })
    }

  
}