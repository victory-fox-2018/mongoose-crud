const routes = require('express').Router()
const { findAll, insert, remove, update } = require('../controllers/transactionController')

routes.get('/', findAll)
routes.post('/', insert)
routes.delete('/remove/:id', remove)
routes.put('/update/:id', update)

module.exports = routes