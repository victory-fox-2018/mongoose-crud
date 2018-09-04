const router = require('express').Router();
const Transaction = require('../controllers/transaction');

router.get('/', Transaction.read);
router.post('/', Transaction.insert);
// router.put('/:id', Transaction.update);
// router.delete('/:id', Transaction.erase);

module.exports = router; 