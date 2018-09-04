const transactions = require('express').Router()
const controllers = require('../controllers/transactions')

transactions.get('/',controllers.all.get)
transactions.get('/:id',controllers.findTransaction.get)
transactions.post('/add',controllers.add.post)
transactions.put('/:id/edit',controllers.update.put)
transactions.delete('/:id/delete',controllers.delete.remove)

module.exports = transactions