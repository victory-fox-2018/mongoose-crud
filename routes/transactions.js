const express = require('express');
const router = express.Router();

const Transaction = require('../controllers/transaction')

router.get('/', Transaction.show)
router.post('/', Transaction.create)

router.put('/:id', Transaction.update)
router.patch('/:id', Transaction.update)

router.delete('/:id', Transaction.remove)

module.exports = router
