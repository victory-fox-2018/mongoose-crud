const routes = require('express').Router()
const UserController = require('../controllers/userController')

routes.get('/',UserController.findAll)
routes.post('/', UserController.insert)
routes.put('/:id', UserController.update)
routes.delete('/:id',UserController.remove)

module.exports = routes 