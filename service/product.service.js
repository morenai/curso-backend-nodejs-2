const { faker } = require ('@faker-js/faker');
const boom = require ('@hapi/boom');



class ProductsService {
    constructor(){
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.urlPicsumPhotos(),
                isblock: faker.datatype.boolean(), 
                });
    }
    }

    async create(data) {
        const newProduct =  {
            id: faker.string.uuid(),
            ...data
        }
        this.products.push(newProduct)
        return newProduct;
    }

    async find() {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve(this.products)
            }, 2000);
        })
        // return this.products;
    }

    async findOne(id) {
        const product = this.products.find(item => item.id === id);
        if (!product) {
            throw boom.notFound('Product Not Found');
        }
        if (product.isblock) {
            throw boom.conflict('Product is Block');
        }
        return product;
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Product Not Found');
        }
        const product = this.products[index]
        this.products[index] = {
            ...product,
            ...changes
        }
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Product Not Found');
        }
        this.products.splice(index, 1);
        return { id };
        }


    }


module.exports = ProductsService;
