'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    isbn : {
        type : String,
        required : true
    },
    title : {
        type : String 
    },
    author : {
        type : String
    },
    category : {
        type : String
    },
    stock : {
        type : Number
    }
},{
    timestamps : true
})

const Book = mongoose.model('book',BookSchema);

module.exports = Book