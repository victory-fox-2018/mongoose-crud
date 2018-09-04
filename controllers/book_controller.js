const Book = require('../models/book');

module.exports = {
    insertBook: (req, res) => {
        Book.create(req.body)
        .then((result) => {
            res.status(201).json({
                msg: 'insert succes',
                data: result
            })    
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    readBook: (req, res) => {
        Book.find()
        .then((result) => {
            res.status(200).json({
                data: result
            }) 
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    updateBook: (req, res) => {
        let datatoUpdate = {}
        if(req.body.isbn) datatoUpdate.isbn = req.body.isbn
        if(req.body.title) datatoUpdate.title = req.body.title
        if(req.body.author) datatoUpdate.author = req.body.author
        if(req.body.category) datatoUpdate.category = req.body.category
        if(req.body.stock) datatoUpdate.stock = req.body.stock

        Book.updateOne({_id: req.params.id}, datatoUpdate)
        .then((result) => {
            res.status(201).json({
                msg: 'update succes',
                data: result
            }) 
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    deleteBook: (req, res) => {
        Book.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(201).json({
                msg: 'delete succes',
                data: result
            }) 
        })
        .catch((err) => {
             res.status(400).json(err)
        });
    }
};
