const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    isbn: "string",
    title: "string",
    author: "string",
    category: "string",
    stock: "number" 
}, {
    timestamps: true
});


module.exports = mongoose.model('Book', schema);