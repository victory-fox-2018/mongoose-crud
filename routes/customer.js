const routes = require('express').Router()
const { findAll, findOne, insert, update, remove, findBy } = require('../controllers/customerController')

routes.get('/', findAll)
routes.get('/name/:name', findBy)
routes.post('/', insert)
routes.put('/update/:id', update)
routes.delete('/remove/:id', remove)

module.exports = routes