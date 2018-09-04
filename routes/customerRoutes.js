const router = require('express').Router();
const CustomerController = require('../controllers/customerController');

router.get('/', CustomerController.findAll);
router.get('/:id', CustomerController.findById);
router.post('/', CustomerController.create);
router.put('/:id', CustomerController.update);
router.delete('/:id', CustomerController.remove);

module.exports = router;