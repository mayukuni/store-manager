const productModel = require('../../../models/product');
const connection = require('../../../models/connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('ProductModel', () => {
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
      sinon.stub(connection, 'execute').resolves([mock]);
      const product = await productModel.getAll();
      expect(product).to.be.an('array');
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
      const product = await productModel.getById(1);
      sinon.stub(connection, 'execute').resolves([[mock]]);
      expect(product).to.be.equal(product);
    });

    it('deve retornar undefined se retornar um array vazio', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);

      const product = await productModel.getById(1);
      expect(product).to.be.undefined;
    });
  });

  describe('#create', () => {
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
    ];
    
    it('deve retornar um objeto com o produto criado', async () => {
      const product = await productModel.create('Martelo de Thor');
      sinon.stub(connection, 'execute').resolves([[mock]]);
      expect(product).to.be.an('object');
    });
  });

  describe('#delete', () => {
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
    ];
    
    it('deve deletar o produto e retornar undefined', async () => {
      const product = await productModel.delete(1);
      sinon.stub(connection, 'execute').resolves([[mock]]);
      expect(product).to.contain(undefined);
    });
  });
});