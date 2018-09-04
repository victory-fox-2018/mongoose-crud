const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    isbn: {
        type: String,
        required: [true, 'is required']
    },
    title: {
        type: String,
        required: [true, 'is required']
    },
    author:   {
        type: String,
        required: [true, 'is required']
    },
    category: {
        type: String,
        required: [true, 'is required']
    },
    stock: {
        type: Number,
        required: [true, 'is required']
    },
}, {
    timestamps : true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book