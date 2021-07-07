const router = require('express').Router()
const { getAll, getCustomer, createCustomer, deleteCustomer, updateCustomer } = require('../controllers/customer')

router.get('/', getAll)
router.post('/', createCustomer)
router.get('/:id', getCustomer)
router.delete(`/:id`, deleteCustomer)
router.put('/:id', updateCustomer)

module.exports = router