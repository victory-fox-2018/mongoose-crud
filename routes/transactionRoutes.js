const router = require('express').Router();
const TransactionController = require('../controllers/transactionController');

router.get('/', TransactionController.findAll);
router.get('/:id', TransactionController.findById);
router.post('/', TransactionController.create);
router.put('/:id', TransactionController.update);
router.delete('/:id', TransactionController.remove);

module.exports = router;