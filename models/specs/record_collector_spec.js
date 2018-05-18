const assert = require('assert');
const Collector = require('../record_collector.js');
const Record = require('../record.js');

describe('Collector', function () {
  let collector;
  let record01;
  let record02;

  beforeEach(function() {
    collector = new Collector("Jaime Lopez");
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
  });

  it('should start with no funds', function() {
    const actual = collector.funds;
    assert.strictEqual(actual, 0);
  });
  it('should be able to add funds', function() {
    collector.addFunds(10);
    const actual = collector.funds;
    assert.strictEqual(actual, 10);
  });

  it('should be able to remove funds', function() {
    collector.addFunds(50);
    collector.removeFunds(20);
    const actual = collector.funds;
    assert.strictEqual(actual, 30);
  })
  it('should start with an empty collection of records', function() {
    const actual = collector.records;
    assert.deepStrictEqual(actual, []);
  });
  it('should be able to add a record to it\'s collection', function() {
    collector.addRecord(record01);
    const actual = collector.records[0];
    assert.deepStrictEqual(actual, record01);
  });
  it('should be able to find a record by title', function() {
    collector.addRecord(record01);
    collector.addRecord(record02);
    const actual = collector.findRecordByTitle('Glamazon');
    assert.deepStrictEqual(actual, record02);
  });
  it('should be able to remove a record from it\'s collection', function() {
    collector.addRecord(record01);
    collector.addRecord(record02);
    collector.removeRecord(record01);
    const actual = collector.records[0];
    assert.deepStrictEqual(actual, record02);
  });
  it('should be able to buy a record if it has enough funds');
  it('should be able to sell a record if it has the record');

});
