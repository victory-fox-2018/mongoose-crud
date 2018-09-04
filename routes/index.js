const router = require('express').Router();
const Home = require('../controllers/index');

router.get('/', Home.index);

module.exports = router;