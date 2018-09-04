'use strict'

const express = require('express')
const router = express.Router()
const books = require('./bookRouter')
const customers = require('./customerRouter')
const transactions = require('./transactionRouter')

router.use('/books', books)
router.use('/customers', customers)
router.use('/transactions', transactions)

// router.get('/', function(req, res){
//     res.redirect('/api')
// })

module.exports = router