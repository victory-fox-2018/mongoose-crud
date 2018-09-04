var express = require('express');
var router = express.Router();
var { getAllTransaction, getOneTransaction, addTransaction, deleteTransaction, updateTransaction } = require('../controllers/transaction')

/* GET users listing. */
router.get('/', getAllTransaction)
router.get('/:id', getOneTransaction)

router.post('/', addTransaction)
router.delete('/:id', deleteTransaction)
router.put('/:id', updateTransaction)

module.exports = router;
