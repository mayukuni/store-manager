const productService = require('../services/productService');

const nameValidator = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

const idValidator = async (req, res, next) => {
  const { id } = req.params;
  const idExists = await productService.getById(id);
  if (!idExists) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = {
  nameValidator,
  idValidator,
};