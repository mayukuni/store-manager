const productModel = require('../models/product');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};