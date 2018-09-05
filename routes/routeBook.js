const Router = require('express').Router()
const { getAllBook, addBook, findOneBook, removeBook, updateBook } = require('../controllers/controllerBook')

Router.get('/', getAllBook)
Router.post('/add', addBook)
Router.post('/findOne/:id', findOneBook)
Router.delete('/remove/:id', removeBook)
Router.put('/update/:id', updateBook)


module.exports = Router