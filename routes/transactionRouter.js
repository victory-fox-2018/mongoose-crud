const router = require('express').Router()
const { createOne, getAll, getOne, updateOne, deleteOne } = require('../controllers/transactionController')

router.post('/', createOne)
router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router