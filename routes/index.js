const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const categoriesFilter= require('./filter.router');

function routerApi(app) {
        const router = express.Router();
        app.use('/api/v1', router) //. path global para los endpoints 
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/filter', categoriesFilter);
}

module.exports = routerApi;
