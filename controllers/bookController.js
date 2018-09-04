const Book = require('../models/book')
const objId = require('mongodb').ObjectID

class BookController {

    static insert(req, res) {
        
        let data = {
            isbn : req.body.isbn,
            title : req.body.title,
            author : req.body.author,
            category : req.body.category,
            stock : Number(req.body.stock)
        }
        
        let book = new Book(data);

        book.save((err) => {
            if (!err) {
                res.status(201).json({
                    message : 'inserting book success',
                    bookData : data 
                })
            } else {
                res.status(500).json({
                    message : err
                })
            }
        });
    }
    
    static update(req, res) {
        
        Book.updateOne({ "_id": objId(req.params.id) }, req.body, (err, result) =>  {
            if (!err) {
                res.status(201).json({
                    message : 'updating book success',
                    bookData : result 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        })
    }

    static remove(req, res) {
        
        Book.deleteOne({ "_id": objId(req.params.id) },(err) => {
            if (!err) {
                res.status(200).json({
                    message : 'deleting book success'
                })
            } else {
                res.status(500).json({
                    message : 'deleting book failed'
                })
            }
        });
    }

    static findAll(req,res) {
        
        Book.find((err, books) => {
            if (!err) {
                res.status(200).json({
                    booksData : books 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        });
    }

}

module.exports = BookController