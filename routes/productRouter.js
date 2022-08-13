const Router = require('express');

const productController = require('../controllers/productController');
const productMiddleware = require('../middlewares/productMiddleware');

const routes = Router();

routes.get('/', productController.getAllProducts);
routes.get('/:id', productController.getProductById);
routes.post('/', productMiddleware.nameValidator, productController.create);
routes.delete('/:id', productMiddleware.idValidator, productController.delete);

module.exports = routes;