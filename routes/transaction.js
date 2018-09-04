const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController')

router.get('/', (req, res) => {
  transactionController.showAll(req, res)
})
router.get('/:id', (req, res) => {
  transactionController.showOne(req, res)
})
router.post('/', (req, res) => {
  transactionController.add(req, res)
})
router.put('/:id', (req, res) => {
  transactionController.edit(req, res)
})
router.delete('/:id', (req, res) => {
  transactionController.destroy(req, res)
})

module.exports = router;