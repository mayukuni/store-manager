const saleModel = require('../../../models/sale');
const connection = require('../../../models/connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('SaleModel', () => { 
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
      const sales = await saleModel.getAll();
      sinon.stub(connection, 'execute').resolves([mock]);
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
      const sale = await saleModel.getById(1);
      sinon.stub(connection, 'execute').resolves([[mock]]);
      expect(sale).to.be.equal(sale);
    });
  });
});