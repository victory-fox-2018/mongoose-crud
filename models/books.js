const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const bookScheme = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookScheme)
module.exports = Book