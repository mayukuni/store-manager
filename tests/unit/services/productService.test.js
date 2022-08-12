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
  
  describe('#getAllProducts', () => {
    it('deve retornar um array com a lista de produtos', async () => {
      const products = await productService.getAllProducts()
      sinon.stub(productModel, 'getAllProducts').resolves(mock);
      expect(products).to.be.an('array');
    });
  })
  
  describe('#getProductById', () => {
    it('deve retornar um objeto', async () => {
      const product = await productService.getProductById(1);
      sinon.stub(productModel, 'getProductById').resolves(mockObj);
      expect(product).to.be.an('object');
    });

    it('deve retornar undefined se retornar um array vazio', async () => {
      const product = await productService.getProductById(1001);
      sinon.stub(productModel, 'getProductById').resolves(undefined);
      expect(product).to.be.undefined;
    });
  })
})