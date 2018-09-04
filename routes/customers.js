var express = require('express');
var router = express.Router();
const {insertCst, getCst, updateCst, deleteCst} = require('../controllers/customer_controller');
/* GET users listing. */
router.post('/',insertCst)
      .get('/', getCst)
      .put('/:id', updateCst)
      .delete('/:id', deleteCst)
module.exports = router;
