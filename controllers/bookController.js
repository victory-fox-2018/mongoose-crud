const hash = require('../helpers/hashhelper')
const Book = require('../models/bookModel')

module.exports = {
    
    createOne: (req, res) => {
        let objBook = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock,
        }
        Book.create(objBook)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getAll: (req, res) => {
        Book.find()
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getOne: (req, res) => {
        Book.findById({_id:req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    updateOne: (req, res) => {
        let objBook = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock,
        }
        Book.findByIdAndUpdate({_id: req.params.id}, objBook)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }, 

    deleteOne: (req, res) => {
        Book.findByIdAndDelete({_id: req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }
}