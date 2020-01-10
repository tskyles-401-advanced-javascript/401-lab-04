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
    let response = id ? editFile.readerWithPromise(this.database).filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    editFile.writerWithPromise(this.database, record);
    return Promise.resolve(record);
  }

  update(id, record) {
    this.database = editFile.readerWithPromise(this.database).map((item) => (item.id === id) ? edit.writerWithPromise(record) : item);
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = Model;