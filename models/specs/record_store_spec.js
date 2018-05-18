const assert = require('assert');
const Store = require('../record_store.js');

describe('Store', function () {
  let store;

  beforeEach(function() {
    store = new Store('Michelle\'s Heaven');
  });

  it('should have a name', function() {
    const actual = store.name;
    assert.strictEqual(actual, 'Michelle\'s Heaven');
  });
  it('should start with no funds', function() {
    const actual = store.funds;
    assert.strictEqual(actual, 0);
  });
  it('should be able to add funds', function() {
    store.addFunds(10);
    const actual = store.funds;
    assert.strictEqual(actual, 10);
  });
  it('should start with an empty collection of records', function() {
    const actual = store.records;
    assert.deepStrictEqual(actual, []);
  });
  it('should be able to add a record to its stock');
  it('should be able to sell a record if it has the record');

});
