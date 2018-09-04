const express = require('express');
const router = express.Router();

const Customer = require('../controllers/customer')

router.get('/', Customer.show)
router.post('/', Customer.create)

router.put('/:id', Customer.update)

router.delete('/:id', Customer.remove)

module.exports = router
