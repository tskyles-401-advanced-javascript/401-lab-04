'use strict';

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

/**
  * Validator function
  * @class
  */
class Validator {
  constructor(){}
  isValid(schema, input){
    let valid = true;
    for(let fieldName in schema.fields){
      let field = schema.fields[fieldName];
      // am i required and set?
      let required = field.required
        ?this.isTruthy(input[fieldName])
        :true;
      // am i the right type?
      // code through all the fields and check if type is correct
      let type = field.type
        ?this.isCorrectType(input[fieldName], field)
        :true;
      if(!(required && type)){
        valid = false;
      }
    }
    return valid;
  }
  /**
   * @function isString
   * @param {string} input - Inputted data
   * @returns {boolean} 
   */
  isString(input){
    return typeof input === 'string';
  }
  /**
   * @function isObject
   * @param {object} input - Inputted data
   * @returns {boolean} 
   */
  isObject(input){
    return typeof input === 'object' && !(input instanceof Array);
  }
  /**
   * @function isArray
   * @param {array} input - Inputted data
   * @param {array} valueType
   * @returns {boolean} 
   */
  isArray(input, valueType){
    return Array.isArray(input) && (valueType? input.every(val => typeof val === valueType): true);
  }
  /**
   * @function isBoolean
   * @param {object} input - Inputted data
   * @returns {boolean} 
   */
  isBoolean(input){
    return typeof input === 'boolean';
  }
  /**
   * @function isBNumber
   * @param {object} input - Inputted data
   * @returns {boolean} 
   */
  isNumber(input){
    return typeof input === 'number';
  }
  /**
   * @function isFunction
   * @param {object} input - Inputted data
   * @returns {boolean} 
   */
  isFunction(input){
    return typeof input === 'function';
  }
  /**
   * @function isTruthy
   * @param {object} input - Inputted data
   * @returns {boolean} 
   */
  isTruthy(input){
    return !!input;
  }
  /**
   * @function isCorrectType
   * @param input 
   * @param field
   * @returns {boolean} 
   */
  isCorrectType(input, field){
    switch(field.type) {
    case 'string': return this.isString(input);
    case 'number': return this.isNumber(input);
    case 'array': return this.isArray(input, field.valueType);
    case 'object': return this.isObject(input);
    case 'boolean': return this.isBoolean(input);
    default: return false;
    }
  }
}

/**
 * Exports new Validator instance
 * @module Validator
 */
module.exports = new Validator;
