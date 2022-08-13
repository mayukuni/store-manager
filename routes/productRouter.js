const Router = require('express');

const productController = require('../controllers/productController');
const productMiddleware = require('../middlewares/productMiddleware');

const routes = Router();

routes.get('/', productController.getAllProducts);
routes.get('/:id', productController.getProductById);
routes.post('/', productMiddleware.nameValidator, productController.create);

module.exports = routes;