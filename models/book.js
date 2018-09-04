'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    isbn : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true 
    },
    author : {
        type : String,
        required : true

    },
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required :true
    }
},{
    timestamps : true
})

const Book = mongoose.model('book',BookSchema);

module.exports = Book