const routes = require('express').Router()
const { findAll, findOne, insert, update, remove, findBy } = require('../controllers/bookController')

routes.get('/', findAll)
routes.get('/title/:code', findBy)
routes.post('/', insert)
routes.put('/update/:id', update)
routes.delete('/remove/:id', remove)

module.exports = routes