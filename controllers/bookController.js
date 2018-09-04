const ObjectId = require('mongodb').ObjectId;
const Book = require('../models/bookModel')

class BookController {

    static showAll(req, res) {
        Book.find({}, (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static showOne(req, res) {
        Book.findById(ObjectId(req.params.id), (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static showOne(req, res) {
        Book.find({_id: ObjectId(req.params.id)}, (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static add(req, res) {
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: Number(req.body.stock)
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Book '${req.body.title}' added`})
            }
        })
    }

    static edit(req, res) {
        Book.updateOne({
            _id: ObjectId(req.params.id)
        },{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: Number(req.body.stock)
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Book with id: '${req.params.id}' updated`})
            }
        })
    }

    static destroy(req, res) {
        Book.deleteOne({
            _id: ObjectId(req.params.id)
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Book with id: '${req.params.id}' deleted`})
            }
        })
    }
}

module.exports = BookController