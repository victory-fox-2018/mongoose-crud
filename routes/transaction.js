const router = require('express').Router()
const { getAll, createTransaction, getTransaction, deleteTransaction, updateTransaction } = require('../controllers/transaction')
router.get('/', getAll)
router.post('/', createTransaction)
router.get('/:id', getTransaction)
router.delete('/:id', deleteTransaction)
router.put('/:id', updateTransaction)


module.exports = router