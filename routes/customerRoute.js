const router = require('express').Router()
const { addCustomer, displayAllCustomers, displaySingleCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerController')

router.post('/add', addCustomer)
router.get('/display', displayAllCustomers)
router.post('/display/:id', displaySingleCustomer)
router.put('/update/:id', updateCustomer)
router.delete('/delete/:id', deleteCustomer)

module.exports = router