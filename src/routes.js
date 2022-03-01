const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const route = require('color-convert/route');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: 'sucess' }));

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.store);

routes.get('/addresses', AddressController.getAllAddresses);
routes.post('/addresses', AddressController.store);

routes.get('/:user_id/addresses', AddressController.index);

module.exports = routes;
