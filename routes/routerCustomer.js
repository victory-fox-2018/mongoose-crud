const Router = require('express').Router()
const { getAllCostumer, addCostumer, findOneCostumer, removeCostumer, updateCostumer } = require('../controllers/controllerCostumer')

Router.get('/', getAllCostumer)
Router.post('/add', addCostumer)
Router.post('/findOne/:id', findOneCostumer)
Router.delete('/remove/:id', removeCostumer)
Router.put('/update/:id', updateCostumer)


module.exports = Router