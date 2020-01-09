const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
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
    return categories.create(obj)
      .then(record => {
        console.log(record);
        return categories.update(record.id, updatedObj.name)
          .then(category => {
            console.log(category.id);
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(updatedObj[key]);
            });
          });
      });
  });

  it('can delete() a catelgory', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.delete(record.id)
          .then(category => {
            expect(category).toBeUndefined();
          });
      });
  });

});