const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book
