const Router = require('express').Router()
const { getAllTransaction, addTransaction, findOneTransaction, removeTransaction, updateTransaction } = require('../controllers/controllerTransaction')

Router.get('/', getAllTransaction)
Router.post('/add', addTransaction)
Router.post('/findOne/:id', findOneTransaction)
Router.delete('/remove/:id', removeTransaction)
Router.put('/update/:id', updateTransaction)


module.exports = Router