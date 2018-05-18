const assert = require('assert');
const Store = require('../record_store.js');
const Record = require('../record.js');

describe('Store', function () {
  let store;
  let record01;
  let record02;

  beforeEach(function() {
    store = new Store('Michelle\'s Heaven');
    record01 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 10
    });
    record02 = new Record({
      title: 'Glamazon',
      artist: 'Ru Paul',
      genre: 'Pop',
      price: 15
    });
    record03 = new Record({
      title: 'Highway to Hell',
      artist: 'AC-DC',
      genre: 'rock',
      price: 15
    });
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
  it('should be able to add a record to its stock', function() {
    store.addRecord(record01);
    const actual = store.records[0];
    assert.deepStrictEqual(actual, record01);
  });
  it('should be able to remove a record from its stock', function() {
    store.addRecord(record01);
    store.addRecord(record02);
    const actual = store.removeRecord(record01);
    const length = store.records.length;
    assert.deepStrictEqual(actual, record01);
    assert.strictEqual(length, 1);
  });
  it('should be able to sell a record if it has the record', function() {
    store.addRecord(record01);
    store.addRecord(record02);
    const actual = store.sellRecord(record02);
    const length = store.records.length;
    const funds = store.funds;
    assert.deepStrictEqual(actual, record02);
    assert.strictEqual(length, 1);
    assert.strictEqual(funds, 15);
  });
  it('should be able to find records matching an specific property', function() {
    store.addRecord(record01);
    store.addRecord(record02);
    store.addRecord(record03);
    const actual = store.findRecordsBy('genre', 'rock').length;
    const actual2 = store.findRecordsBy('price', 15).length;
    const actual3 = store.findRecordsBy('title', 'Glamazon').length;
    assert.strictEqual(actual, 2);
    assert.strictEqual(actual2, 2);
    assert.strictEqual(actual3, 1);
  })

});
