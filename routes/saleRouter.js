const Router = require('express');

const saleController = require('../controllers/saleController');

const routes = Router();

routes.get('/', saleController.getAll);
routes.get('/:id', saleController.getById);

module.exports = routes;
