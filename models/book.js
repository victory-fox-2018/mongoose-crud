const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'isbn is requeried']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    author: {
        type: String,
        required: [true, 'author is required']
    },
    category: {
        type: String,
        required: [true, 'category is required']
    },
    stock: {
        type: String, 
        required: [true, 'stock is required']
    }
})

var Book = mongoose.model('Book', bookSchema);

module.exports = Book