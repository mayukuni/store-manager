const saleService = require('../services/saleService');

const productValidator = async (req, res, next) => { 
  const { id } = req.params;
  const sale = await saleService.getById(id);
  if (sale.length === 0) return res.status(404).json({ message: 'Sale not found' });
  next();
};

module.exports = {
  productValidator,
};