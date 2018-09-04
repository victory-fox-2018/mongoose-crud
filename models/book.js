const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
}, {
        timestamps: true
    });

var Book = mongoose.model('Book', bookSchema)

module.exports = Book