const router = require('express').Router()
const bookRouter = require('./book')
const customerRouter = require('./customer')
const transactionRouter = require('./transaction')

router.use('/books', bookRouter)
router.use('/customers', customerRouter)
router.use('/transactions', transactionRouter)

module.exports = router
