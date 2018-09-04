const Book = require('../models/book');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
mongoose.connect('mongoodb://localhost:27017/library2', {
  useNewUrlParser: true
});

class Controller {
  static insert(req, res) {
    Book
      .create(req.body)
      .then(book => {
        res.status(200).json({
          message: `'${req.body.title}' has been insert into books`,
          data: book
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static read(req, res) {
    Book
      .find({})
      .then(books => {
        res.status(200).json({
          message: 'Books has been suucessfully loaded',
          data: books
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static update(req, res) {
    const id = ObjectId(req.params.id);
    const condition = ({_id: id});
    let newData = {};
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    for(let i = 0; i < keys.length; i++) {
      newData[keys[i]] = values[i];
    }  
  
    Book
      .update(condition, newData)
      .then(book => {
        res.status(200).json({
          message: 'Book has been updated'
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static erase(req, res) {
    const id = ObjectId(req.params.id);
    const condition = ({_id: id});
    Book
      .deleteOne(condition)
      .then(data => {
        res.status(201).json({
          message: `Book has been deleted`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

}

module.exports = Controller;