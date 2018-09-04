const routes = require('express').Router()
const TransactionController = require('../controllers/transactionController')

routes.get('/',TransactionController.findAll)
routes.post('/', TransactionController.insert)
// routes.put('/:id', TransactionController.update)
// routes.delete('/:id',TransactionController.remove)

module.exports = routes 