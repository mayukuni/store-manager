const saleModel = require('../models/sale');

const saleService = {
  getAll: async () => {
    const sales = await saleModel.getAll();
    return sales;
  },

  getById: async (id) => {
    const sale = await saleModel.getById(id);
    return sale;
  },
};

module.exports = saleService;