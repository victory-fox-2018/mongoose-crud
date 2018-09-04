const routes = require('express').Router()
const BookController = require('../controllers/bookController')

routes.get('/',BookController.findAll)
routes.post('/', BookController.insert)
routes.put('/:id', BookController.update)
routes.delete('/:id',BookController.remove)

module.exports = routes