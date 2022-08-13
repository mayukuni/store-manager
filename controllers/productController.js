const productService = require('../services/productService');

const productController = {
  getAllProducts: async (_req, res) => {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  },
  
  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  },

  create: async (req, res) => {
    const { name } = req.body;
    const product = await productService.create(name);
    // if (!name) return res.status(400).json({ message: '"name" is required' });
    // if (name.length < 5) {
    //   return res.status(400).json({ message: '"name" length must be at least 5 characters long' });
    // }
    res.status(201).json(product);
  },
};

module.exports = productController;