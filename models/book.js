const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    isbn: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String
    },
    stock: {
        type: Number
    },
},{
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
