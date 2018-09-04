const router = require('express').Router();
const Customer = require('../controllers/customer');

router.get('/', Customer.read);
router.post('/', Customer.insert);
router.put('/:id', Customer.update);
router.delete('/:id', Customer.erase);

module.exports = router;