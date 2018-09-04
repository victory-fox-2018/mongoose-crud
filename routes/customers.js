var express = require('express');
var router = express.Router();
var { getAllCustomer, getOneCustomer, addCustomer, deleteCustomer, updateCustomer } = require('../controllers/customer')

/* GET users listing. */
router.get('/', getAllCustomer)
router.get('/:id', getOneCustomer)

router.post('/', addCustomer)
router.delete('/:id', deleteCustomer)
router.put('/:id', updateCustomer)



module.exports = router;
