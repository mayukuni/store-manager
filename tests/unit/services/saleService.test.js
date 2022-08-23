const saleService = require('../../../services/saleService');
const saleModel = require('../../../models/sale');
const sinon = require('sinon');
const { expect } = require('chai');

describe('SaleService', () => { 
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

    it('deve retornar um array com a lista de produtos', async () => {
      const sales = await saleService.getAll();
      sinon.stub(saleModel, 'getAll').resolves([mock]);
      expect(sales).to.be.an('array');
    });
  });

  describe('#getById', () => { 
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
    ];
    
    it('deve retornar o produto específico', async () => {
      const sale = await saleService.getById(1);
      sinon.stub(saleModel, 'getById').resolves([[mock]]);
      expect(sale).to.be.equal(sale);
    });
  });
});