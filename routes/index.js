const router = require('express').Router()
const book = require('./bookRouter')
const customer = require('./customerRouter')
const transaction = require('./transactionRouter')

router.use('/api/books', book)
router.use('/api/customers', customer)
router.use('/api/transactions', transaction)

router.get('/', (req, res, next) => {
    res.status(200).json("REST API ASRUL H")
})

module.exports = router