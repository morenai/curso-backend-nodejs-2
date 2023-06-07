const express = require('express');

const ProductsService = require('./../service/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/products.schema')

const router = express.Router(); 
const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find()
    res.json(products);
});

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
    try {
        const{ id } = req.params;
        const product = await service.findOne(id);
        res.json(product);
    }   catch (error) {
        next(error);
    }
});



router.post('/', 
    validatorHandler(createProductSchema,'body'),
    async (req, res, next) => {
    const body = req.body;
    await service.create(body)
    .then(result => res.status(201).json(result))
    .catch(eMessage => {
        next(eMessage)
    });
})
    

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

module.exports = router;