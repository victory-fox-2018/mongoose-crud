const hash = require('../helpers/hashhelper')
const Book = require('../models/bookModel')

module.exports = {
    createOne: (req, res) => {
        let objBook = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock,
        }
        Book.create(objBook)
    }
}