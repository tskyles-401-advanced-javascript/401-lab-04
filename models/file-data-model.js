'use strict';

const uuid = require('uuid/v4');
const validator = require('../validator/lib/validator');
const editFile = require('../fs/edit-file');

class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    this.database.push(record);
    editFile.writerWithPromise(record);
    return Promise.resolve(record);
  }

  update(id, record) {
    const toBeValidated = this.database.map((item) => (item.id === id) ? record : item);
    if(validator.isValid(this.schema, toBeValidated)){
      // this.database = toBeValidated;
      editFile.writerWithPromise(record);
    }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = Model;