const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'sucess' }));

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.store);

routes.get('/addresses', AddressController.getAllAddresses);
routes.post('/addresses', AddressController.store);

routes.get('/:user_id/addresses', AddressController.index);

routes.post('/:user_id/techs', TechController.store);

module.exports = routes;
