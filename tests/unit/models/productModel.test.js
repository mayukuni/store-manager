const productModel = require('../../../models/product');
const connection = require('../../../models/connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('ProductModel', () => {
  beforeEach(sinon.restore);

  describe('#getAllProducts', () => {
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
      const product = await productModel.getAllProducts();
      expect(product).to.be.an('array');
    });
  })

  describe('#getProductById', () => {
    const mock = [
    	{
	    	"id": 1,
    		"name": "Martelo de Thor"
    	},
    ];
    
    it('deve retornar o produto específico', async () => {
      const product = await productModel.getProductById(1);
      sinon.stub(connection, 'execute').resolves([[mock]]);
      expect(product).to.be.equal(product);
    });

    it('deve retornar undefined se retornar um array vazio', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);

      const product = await productModel.getProductById(1);
      expect(product).to.be.undefined;
    });
  })
});