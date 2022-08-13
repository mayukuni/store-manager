const productModel = require('../models/product');

const productService = {
  getAllProducts: async () => {
    const products = await productModel.getAllProducts();
    return products;
  },
  
  getProductById: async (id) => {
    const product = await productModel.getProductById(id);
    return product;
  },

  create: async (name) => {
    const product = await productModel.create(name);
    return product;
  },

  delete: async (id) => {
    const product = await productModel.delete(id);
    return product;
  },
};

module.exports = productService;