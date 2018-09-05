const ObjectId = require('mongodb').ObjectID;
const Book = require('../models/book');

module.exports = {
  findAll: function(req,res) {
    Book.find()
      .then(books => {
        res.status(200).json({
          message: 'find all success!',
          data: books
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  create: function(req,res) {
    let newBook = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })

    newBook.save((err, book) => {
      if (!err) {
        res.status(201).json({
          message: 'new book created successfully!',
          data: book
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },
  remove: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    Book.deleteOne(id, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'book deleted successfully!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  },
  update: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    let objUpdate = req.body
    Book.updateOne(id, objUpdate, function(err, data) {
      if (!err) {
        res.status(200).json({
          message: 'book data updated!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  }
}
