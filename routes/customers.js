const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

router.get('/', (req, res) => {
  customerController.showAll(req, res)
})
router.get('/:id', (req, res) => {
  customerController.showOne(req, res)
})
router.post('/', (req, res) => {
  customerController.add(req, res)
})
router.put('/:id', (req, res) => {
  customerController.edit(req, res)
})
router.delete('/:id', (req, res) => {
  customerController.destroy(req, res)
})

module.exports = router;