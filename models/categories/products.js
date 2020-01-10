'use strict';

const DataModel = require('../file-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      fields: {
        category_id: { type: 'string', required: true },
        price: { type: 'number', required: true },
        weight: { type: 'number' },
        quantity_in_stock: { type: 'number', required: true },
      },
    };
  }

}

const laptops = new Products();
const bags = new Products();

laptops.create({
  category_id: 'laptops',
  price: 200,
  weight: 4,
  quantity_in_stock: 50,
});

bags.create({
  category_id: 'bags',
  price: 30,
  weight: 2,
  quantity_in_stock: 100,
});

laptops.update('laptops', {price: 300});

module.exports = Products;