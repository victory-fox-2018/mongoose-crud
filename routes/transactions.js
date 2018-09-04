const router = require('express').Router()
const { createTransaction, updateTransaction, getAllTransaction, deleteTransaction } = require('../controllers/transactionController')

router.post('/',createTransaction)

router.put('/:id',updateTransaction)

router.get('/',getAllTransaction)

router.delete('/:id',deleteTransaction)

module.exports = router