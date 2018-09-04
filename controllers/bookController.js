const Book = require('../models/book')

const addBook = (req, res) => {
    const { isbn, title, author, category, stock } = req.body
    Book.create({
       isbn: isbn,
       title: title,
       author: author,
       category: category,
       stock: stock
    })
    .then((data) => {
        res.status(200).json({
            message: `success create a new book`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const findAllBook = (req, res) => {
    Book.find({})
    .then((data) => {
        res.status(200).json({
            message: `list books`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const updateBook = (req, res) => {

    const { isbn, title, author, category, stock } = req.body
    let dataUpdate = {}

    if(isbn) dataUpdate.isbn = isbn
    if(title) dataUpdate.title = title
    if(author) dataUpdate.author = author
    if(category) dataUpdate.category = category
    if(stock) dataUpdate.stock = stock
    
    Book.updateOne({
        _id: req.params.id
    }, dataUpdate)
    .then(() => {
        res.status(200).json({
            message: `success update a book`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            message: `success delete a book`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    addBook,
    findAllBook,
    updateBook,
    deleteBook
}