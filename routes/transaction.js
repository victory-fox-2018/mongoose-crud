const routes = require('express').Router()
const { findAll, insert, remove, update } = require('../controllers/transactionController')

routes.get('/', findAll)
routes.post('/', insert)
routes.post('/remove/:id', remove)
routes.post('/update/:id', update)

module.exports = routes