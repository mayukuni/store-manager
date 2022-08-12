const Router = require('express');

const productController = require('../controllers/productController');

const routes = Router();

routes.get('/', productController.getAllProducts);
routes.get('/:id', productController.getProductById);
// routes.delete('/:id', productController.deleteProduct);

module.exports = routes;