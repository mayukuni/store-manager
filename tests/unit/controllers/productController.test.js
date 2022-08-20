const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');
const sinon = require('sinon');

const { expect } = require('chai');

describe('ProductController', () => {
  beforeEach(sinon.restore);
  
  const mock = [
	  {
	  	"id": 1,
	  	"name": "Martelo de Thor"
	  },
  	{
  		"id": 2,
  		"name": "Traje de encolhimento"
  	},
  	{
  		"id": 3,
	  	"name": "Escudo do Capitão América"
  	}
  ];
  
  const mockObj = [
  	{
	  	"id": 1,
  		"name": "Martelo de Thor"
  	},
  ];

  describe('#getAll', () => {
    it('deve retornar um array com a lista de produtos e status 200', async () => {
      sinon.stub(productService, 'getAll').resolves(mock);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await productController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.eq(true);
      expect(res.json.calledWith(mock)).to.be.eq(true);
    });
  });

  describe('getById', () => {
    it('deve retornar o produto específico e status 200', async () => {
      sinon.stub(productService, 'getById').resolves(mockObj);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.params = { id: 1 };

      await productController.getById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mockObj)).to.be.true;
    });
    it('teste', async () => {
      sinon.stub(productService, 'getById').resolves(null);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.params = { id: 1001 };

      await productController.getById(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });
  })
})