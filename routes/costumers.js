var express = require('express');
var router = express.Router();
const { createCostumer, getAllCostumer, updateCostumer, deleteCostumer } = require('../controllers/costumerController')

router.post('/', createCostumer);
router.get('/', getAllCostumer);
router.put('/:id', updateCostumer);
router.delete('/:id', deleteCostumer)

module.exports = router;
