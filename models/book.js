const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn:{
        type: String,
        required: [true, 'isbn is required']
    },
    title:{
        type: String,
        required: [true, 'title is required']
    },
    author:{
        type: String,
        required: [true, 'author is required']
    },
    category:{
        type: String,
        required: [true, 'category is required']
    },
    stock:{
        type: Number,
        required: [true, 'stock is required']
    }
},{
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book