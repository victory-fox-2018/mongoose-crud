const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({ 
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
    category: String,
    stock: Number
},{
    timestamps:true     
});


const Book = mongoose.model('Book', book);
module.exports = Book