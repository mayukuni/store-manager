const connection = require('./connection');

const productModel = {
  getAllProducts: async () => {
    const [products] = await connection.execute(
      'SELECT * FROM StoreManager.products',
    );
    return products;
  },
  
  getProductById: async (id) => {
    const [[product]] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?',
      [id],
    );
    return product;
  },

  create: async (name) => {
    const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [product] = await connection.execute(sql, [name]);
    return { id: product.insertId, name };
  },
};

module.exports = productModel;