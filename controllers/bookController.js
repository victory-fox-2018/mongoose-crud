const Book = require('../models/Book');

const createObjectId = require('../helpers/createObjectId');
const errorHandling = require('../helpers/errorHandling');

class BookController {
  
  static findAll(req, res) {
    Book.find((err, books) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success get all books data',
        books: books
      });
    });
  }

  static findById(req, res) {
    let id = createObjectId(req.params.id);

    Book.findById(id, (err, book) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success get book data',
        book: book
      });
    });
  }

  static create(req, res) {
    let input = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)
    };
    let book = new Book(input);

    book.save((err, book) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success create new book',
        book: book
      });
    });
  }

  static update(req, res) {
    let id = createObjectId(req.params.id);
    let input = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)
    };

    Book.updateOne({_id: id}, input, (err, affected) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success update data',
        affected: affected
      });
    });
  }

  static remove(req, res) {
    let id = createObjectId(req.params.id);

    Book.deleteOne({_id: id}, (err) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success delete data'
      });
    })
  }

}

module.exports = BookController;