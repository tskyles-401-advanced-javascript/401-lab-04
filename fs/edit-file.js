'use strict';

const fs = require('fs');
const util = require('util');

const file = `${__dirname}/../data/products.db`;

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
/**
 *
 * @function readerWithPromise - reads file and converts to object
 * @param {*} file
 * @returns
 */
const readerWithPromise = (file) => {
  return readFilePromise(file)
    .then(data => data.toString().trim())
    .catch(error => error);
};
/**
 *
 * @function writerWithPromise - converts object to JSON string
 * @param {*} text
 * @returns
 */
const writerWithPromise = (text) => {
  console.log(file);
  return writeFilePromise(file, JSON.stringify(text))
    .then(success => success)
    .catch(error => { throw error; });
};

/**
 *  @module editFile - exports readerWithPromise & writerWithPromise functions
 */
module.exports = { readerWithPromise, writerWithPromise };

