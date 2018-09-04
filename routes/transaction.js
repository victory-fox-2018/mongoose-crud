var express = require('express');
var router = express.Router();
const { createTransaction, findAllTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactionController')

router.get('/', findAllTransaction)
router.post('/', createTransaction)
router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransaction)

module.exports = router