const productService = require('../../../services/productService');
const productModel = require('../../../models/product');
const { expect } = require('chai');
const sinon = require('sinon');


describe('ProductService', () => {
  beforeEach(sinon.restore);
  // beforeEach(() => {
  //   sinon.restore();
  // });

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
    it('deve retornar um array com a lista de produtos', async () => {
      const products = await productService.getAll()
      sinon.stub(productModel, 'getAll').resolves(mock);
      expect(products).to.be.an('array');
    });
  });
  
  describe('#getById', () => {
    it('deve retornar o produto específico', async () => {
      const product = await productService.getById(1);
      sinon.stub(productModel, 'getById').resolves(mockObj);
      expect(product).to.be.equal(product);
    });

    it('deve retornar undefined quando o id não existe', async () => {
      const product = await productService.getById(1001);
      sinon.stub(productModel, 'getById').resolves(undefined);
      expect(product).to.be.undefined;
    });
  });

  describe('#create', () => {
    it('deve retornar um objeto com o produto criado', async () => {
      const product = await productService.create('Martelo de Thor');
      sinon.stub(productModel, 'create').resolves(mockObj);
      expect(product).to.be.an('object');
    });
  });
    
  describe('#delete', () => {
    it('deve deletar o produto e retornar undefined', async () => {
      const product = await productService.delete(1);
      sinon.stub(productModel, 'delete').resolves(mockObj);
      expect(product).to.contain(undefined);
    });
  });
});