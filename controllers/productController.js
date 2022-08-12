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
    if (!name) return res.status(400).json({ message: 'Name is required' });
    res.status(201).json(product);
  },
};

// por que o 3 não passa?

module.exports = productController;