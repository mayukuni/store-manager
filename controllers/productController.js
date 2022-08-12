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
    const { data } = await productService.create(name);
    // if (!data) return res.status(500).json({ message: 'Error creating product' });
    // if (!name) return res.status(400).json({ message: 'Name is required' });
    return res.status(201).json(data);
  },
};

module.exports = productController;