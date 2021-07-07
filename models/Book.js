const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = mongoose.connection

const bookSchema = new Schema({
    isbn: String,
    title: {
        type: String,
        required: [true, "Title Harus di Isi"]
    },
    author: {
        type: String,
        required: [true, "Author Harus di Isi"]
    },
    category: String,
    stock: {
        type: Number,
        required: [true, "Stock Harus di Isi"]
    }
})

const Book = db.model('Book', bookSchema)

module.exports = Book