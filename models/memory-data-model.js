'use strict';

const uuid = require('uuid/v4');
const validator = require('../validator/lib/validator');
/**
 *
 *
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
 *
 *
 * @param {*} id
 * @returns
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
 * @returns
 * @memberof Model
 */
  create(record) {
    record.id = uuid();
    this.database.push(record);
    return Promise.resolve(record);
  }
  /**
 *
 *
 * @param {*} id
 * @param {*} record
 * @returns
 * @memberof Model
 */
  update(id, record) {
    this.database = this.database.map((item) => (item.id === id) ? record : item);
    return Promise.resolve(record);
  }
  /**
 *
 *
 * @param {*} id
 * @returns
 * @memberof Model
 */
  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}
/**
 *  @module Model - exports Model
 */
module.exports = Model;