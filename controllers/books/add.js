const books = require('../../models/books')

const post = (req, res) => {

        books.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })      
        .then( (book)=> {
            res.status(201).send({msg:'success add a new book',book})
        })   
        .catch(err => res.status(401).send(err))       
}

module.exports = {post}









