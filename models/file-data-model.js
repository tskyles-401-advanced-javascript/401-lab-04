'use strict';

const uuid = require('uuid/v4');
const validator = require('../validator/lib/validator');
const editFile = require('../fs/edit-file');
/**
 * @class Model
 */
class Model {
/**
 *Creates an instance of Model.
 * @memberof Model
 */
  constructor() {
    this.database = [];
  }
  /**
 * @param {*} id
 * @memberof Model
 */
  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }
  /**
 *
 *
 * @param {*} record
 * @memberof Model
 */
  create(record) {
    record.id = uuid();
    this.database.push(record);
    editFile.writerWithPromise(record);
    return Promise.resolve(record);
  }
  /**
 *
 *
 * @param {*} id
 * @param {*} record
 * @memberof Model
 */
  update(id, record) {
    const toBeValidated = this.database.map((item) => (item.id === id) ? record : item);
    if(validator.isValid(this.schema, toBeValidated)){
      editFile.writerWithPromise(record);
    }
    return Promise.resolve(record);
  }
  /**
 * @param {*} id
 * @memberof Model
 */
  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = Model;