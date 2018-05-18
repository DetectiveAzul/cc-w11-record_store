const assert = require('assert');
const Collector = require('../record_collector.js');

describe('Collector', function () {
  let collector;

  beforeEach(function() {
    collector = new Collector("Jaime Lopez");
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
  it('should start with an empty collection of records', function() {
    const actual = collector.records;
    assert.deepStrictEqual(actual, []);
  });
  it('should be able to add a record to it\'s collection');
  it('should be able to find a record by title');
  it('should be able to remove a record from it\'s collection');
  it('should be able to buy a record if it has enough funds');
  it('should be able to sell a record if it has the record');

});
