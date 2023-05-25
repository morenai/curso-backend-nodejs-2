const { faker } = require('@faker-js/faker');
const express = require('express');
// const { faker } = require("@faker-js/faker");
// const randomName = faker.name.findName();

const app =  express();
const port = 3000;

app.get('/', (req, res ) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res ) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res ) => {
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
  
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter')
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name:'home2',
      price:'20000'
  })
})

app.get('/home', (req, res ) => {
  res.json([
    {
    name: 'Home',
    price: '5000'
    },
    {
      name:'home2',
      price:'20000'
    }
  ]);
})
});



app.get('/users', (req, res) => {
  const {limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros')
  }
});

app.get('/categories/:catergoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.listen(port, () => {
  console.log('mi port ' +  port);
});