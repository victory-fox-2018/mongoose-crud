const routes = require('express')()
const books = require('./books')
const transactions = require('./transactions')
const customers = require('./customers')

routes.use('/books',books)
routes.use('/transactions',transactions)
routes.use('/customers',customers)

module.exports = routes