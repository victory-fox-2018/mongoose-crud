const routes = require('express').Router()
const book = require('./book')
const user = require('./user')
const transaction = require('./transaction')

routes.use('/books',book)
routes.use('/users',user)
routes.use('/transactions',transaction)

routes.get('/',(req,res) => {
    res.status(200).json({
        message : `it's ON`
    })
})

module.exports = routes