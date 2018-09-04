var express = require('express');
var router = express.Router();
;const { createTransaction, getAllTrasaction, updateTrasaction, deleteTranscation } = require('../controllers/transactionController')

router.post('/', createTransaction);
router.get('/', getAllTrasaction);
router.put('/:id', updateTrasaction);
router.delete('/:id', deleteTranscation);

module.exports = router;