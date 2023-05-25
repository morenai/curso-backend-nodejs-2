const { faker } = require('@faker-js/faker');
const express = require('express');

const router = express.Router(); 

router.get('/', (req, res ) => {
    const products = []
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.urlPicsumPhotos(), 
        });
    }
    res.json(products);
});



router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name:'home2',
        price:'20000'
    });
});

module.exports = router