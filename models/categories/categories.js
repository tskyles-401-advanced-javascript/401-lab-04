'use strict';

const DataModel = require('../memory-data-model.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      fields: {
        id: { required: true },
        name: { type: 'string', required: true },
      },
    };
  }
}

module.exports = Categories;