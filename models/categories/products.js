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

laptops.create({
  category_id: 'laptops',
  price: 200,
  weight: 4,
  quantity_in_stock: 50,
});

module.exports = Products;