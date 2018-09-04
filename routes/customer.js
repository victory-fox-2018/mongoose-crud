var express = require('express');
var router = express.Router();
const { register, findAllCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerController');

router.get('/', findAllCustomer)
router.post('/', register)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router;
