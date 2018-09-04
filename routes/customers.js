const customers = require('express').Router()
const controllers = require('../controllers/customers')

customers.get('/',controllers.all.get)
customers.get('/:id',controllers.findCustomer.get)
customers.post('/add',controllers.add.post)
customers.put('/:id/edit',controllers.update.put)
customers.delete('/:id/delete',controllers.delete.remove)

module.exports = customers