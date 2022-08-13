const connection = require('./connection');

const productModel = {
  getAllProducts: async () => {
    const sql = 'SELECT * FROM StoreManager.products';
    const [products] = await connection.execute(sql);
    return products;
  },
  
  getProductById: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[product]] = await connection.execute(sql, [id]);
    return product;
  },

  create: async (name) => {
    const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [product] = await connection.execute(sql, [name]);
    return { id: product.insertId, name };
  },

  delete: async (id) => {
    const sql = 'DELETE FROM StoreManager.products WHERE id = ?';
    const product = await connection.execute(sql, [id]);
    return product;
  },
};

module.exports = productModel;