const router = require('express').Router()
const { addTransaction, displayAllTransactions, displaySingleTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController')

router.post('/add', addTransaction)
router.get('/display', displayAllTransactions)
router.post('/display/:id', displaySingleTransaction)
router.put('/update/:id', updateTransaction)
router.delete('/delete/:id', deleteTransaction)

module.exports = router