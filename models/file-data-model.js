'use strict';

const uuid = require('uuid/v4');
const validator = require('../validator/lib/validator');
const editFile = require('../../fs/edit-file');
const file = `__dirname/../data/products.js`;


class Model {

  constructor() {
    this.database = `__dirname/../data/products.js`;
  }

  get(id) {
    let response = id ? editFile.readerWithPromis(this.database).filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    editFile.writerWithPromise(this.database, record);
    return Promise.resolve(record);
  }

  update(id, record) {
    this.database = this.database.map((item) => (item.id === id) ? record : item);
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

  sanatize(entry) {
    if(validator.isValid(this.schema, entry)){
      return true;
    }
    else {
      return false;
    }
  }

}

module.exports = Model;