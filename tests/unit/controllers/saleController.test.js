const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');
const sinon = require('sinon');
const { expect } = require('chai');

describe('SaleController', () => { 
  beforeEach(sinon.restore);

  describe('#getAll', () => { 
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

    it('deve retornar um array com a lista de produtos e status 200', async () => {
      sinon.stub(saleService, 'getAll').resolves(mock);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      await saleController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mock)).to.be.true;
    });
  });

  describe('#getById', () => { 
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
    ];
    
    it('deve retornar o produto específico e status 200', async () => {
      sinon.stub(saleService, 'getById').resolves(mock);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.params = { id: 1 };

      await saleController.getById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mock)).to.be.true;
    });

    it('deve retornar status 404 quando o id não existe', async () => {
      sinon.stub(saleService, 'getById').resolves(length);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.params = { id: 1001 };

      await saleController.getById(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });
  });
});