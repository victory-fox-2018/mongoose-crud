const router = require('express').Router()
const bookRouter = require('./book')
const customerRouter = require('./customer')

router.use('/books', bookRouter)
router.use('/customers', customerRouter)

module.exports = router
