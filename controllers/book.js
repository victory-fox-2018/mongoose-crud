const Book = require('../models/Book')
const ObjectId = require('mongodb').ObjectId

class Controller {
  
  static show(req, res) {
    Book.find({}, (err, books) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(200).json({books: books})
      }
    })
  }
  
  static create(req, res) {
    const newBook = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    
    newBook.save((err, data) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(201).json({message: 'Data created!', data: data})
      }
    })
  }
  
  static update(req, res) {
    let data = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    
    Book.update({_id: ObjectId(req.params.id)}, data, (err, r) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        if (r.n == 1) {
          res.status(200).json({message: `Data ${req.params.id} updated`})
        }else {
          res.status(404).json({error: 'Data not found!'})
        }
      }
    })
  }
  
  static remove(req, res) {
    Book.deleteOne({_id: ObjectId(req.params.id)}, (err, r) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        if (r.n == 1) {
          res.status(200).json({message: `Data ${req.params.id} deleted`})
        }else {
          res.status(404).json({error: 'Data not found!'})
        }
      }
    })
  }
  
}

module.exports = Controller