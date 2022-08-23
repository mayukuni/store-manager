const Router = require('express');

const saleController = require('../controllers/saleController');
const saleMiddleware = require('../middlewares/saleMiddleware');

const routes = Router();

routes.get('/', saleController.getAll);
routes.get('/:id', saleMiddleware.productValidator, saleController.getById);

module.exports = routes;
