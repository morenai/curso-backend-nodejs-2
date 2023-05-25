const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const categoriesFilter= require('./filter.router');

function routerApi(app) {
    app.use('/products', productsRouter)
    app.use('/users', usersRouter)
    app.use('/categories', categoriesRouter)
    app.use('/filter', categoriesFilter)
}

module.exports = routerApi;
