const Products = require('../categories/products');

describe('Categories Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  xit('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  xit('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  xit('can update() a category', () => {
    let obj = { name: 'Test Category' };
    let updatedObj = { name: 'Updated Category' };
    return products.create(obj)
      .then(record => {
        return products.update(record.id, updatedObj)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).not.toEqual(obj[key]);
            });          
          });
      });
  });

  xit('does not update() if invalid', () => {
    let obj = { name: 'Test Category' };
    let invalidObj = { name: 123 };
    return products.create(obj)
      .then(record => {
        return products.update(record.id, invalidObj)
          .then(category => {
            console.log(record);
          });          
      });
  });


  xit('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    return products.create(obj)
      .then(record => {
        return products.delete(record.id)
          .then(category => {
            expect(category).toBeUndefined();
          });
      });
  });
});
