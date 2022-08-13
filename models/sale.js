const connection = require('./connection');

const saleModel = {
  getAll: async () => {
    const sql = `SELECT sp.sale_id AS saleId, s.date,
    sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`;
    const [sales] = await connection.execute(sql);
    return sales;
  },

  getById: async (id) => {
    const sql = `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE id = ?
    ORDER BY sp.sale_id, sp.product_id`;
    const [sale] = await connection.execute(sql, [id]);
    return sale;
  },
};

module.exports = saleModel;