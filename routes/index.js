const router = require('express').Router()
const book = require('./bookRouter')
const customer = require('./customerRouter')

router.use('/api/books', book)
router.use('/api/customers', customer)

router.get('/', (req, res, next) => {
    res.status(200).json("REST API ASRUL H")
})

module.exports = router