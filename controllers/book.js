const Book = require('../models/book')

const addBook = function (req, res) {
    let { isbn, title, author, category, stock } = req.body
    Book.create({
        isbn: isbn,
        title: title,
        author: author,
        category: category,
        stock: stock
    })
    .then(function (newBook) {
        res.status(200).json({
            message: "add book succes",
            data: newBook
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "add book failed",
            error: err.message
        })
    })
}

const getAllBook = function (req, res) {
    Book.find({})
    .then(function (books) {
        res.status(200).json({
            message: "data found",
            data: books
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "error get data",
            error: err.message
        })
    })
}

const getOneBook = function (req, res) {
    Book.findOne({
        _id: req.params.id
    })
    .then(function (book) {
        res.status(200).json({
            message: "data book found",
            data: book
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "error get data book",
            error: err.message
        })
    })
}

const deleteBook = function (req, res) {
    Book.deleteOne({ _id: req.params.id })
    .then(function () {
        res.status(200).json({
            message: "delete success"
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "delete failed",
            error: err.message
        })
    })
}

const updateBook = function (req, res) {
    let { isbn, title, author, category, stock } = req.body
    let objForUpdate = {}
    if (isbn) objForUpdate.isbn = isbn
    if (title) objForUpdate.title = title
    if (author) objForUpdate.author = author
    if (category) objForUpdate.category = category
    if (stock) objForUpdate.stock = stock
    var setObj = { $set: objForUpdate }

    Book.updateOne({ _id: req.params.id }, setObj)
    .then(function (book) {
        res.status(200).json({
            message: "update success",
            data: book
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "update failed",
            error: err.message
        })
    })
}

module.exports = { addBook, getAllBook, getOneBook, deleteBook, updateBook }