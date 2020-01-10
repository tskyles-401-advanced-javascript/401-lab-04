'use strict';

const fs = require('fs');
const util = require('util');

const file = `__dirname/../data/products.js`;

const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const readerWithPromise = (file) => {
  return readFilePromise(file)
    .then(data => data.toString().trim())
    .catch(error => error);
};

const writerWithPromise = (file, text) => {
  let contents = Buffer.from(typeof text === 'object'? JSON.stringify(text) : text);
  return write(file, contents)
    .then(success => success)
    .catch(error => { throw error; });
};

