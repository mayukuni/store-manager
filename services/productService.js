const productModel = require('../models/product');

const productService = {
  getAll: async () => {
    const products = await productModel.getAll();
    return products;
  },
  
  getById: async (id) => {
    const product = await productModel.getById(id);
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