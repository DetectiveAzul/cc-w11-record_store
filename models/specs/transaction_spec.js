const assert = require('assert');
const Transaction = require('../transaction.js');
const Record = require('../record.js');
const Collector = require('../record_collector.js');
const Store = require('../record_store.js');


describe('Transaction', function () {
  let transaction;
  let store;
  let record;
  let collector;

  beforeEach(function() {
    collector = new Collector("Jaime Lopez");
    store = new Store('Michelle\'s Heaven');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 10
    });
    transaction = new Transaction(collector, store, 'Their Greatest Hits 1971 - 1975');
  });

  it('should have a buyer', function() {
    const actual = transaction.buyer;
    assert.deepStrictEqual(actual, collector);
  });
  it('should have a seller', function() {
    const actual = transaction.seller;
    assert.deepStrictEqual(actual, store);
  });
  it('should be able to check if the seller has the record', function() {
    const actual = transaction.hasTheRecord();
    assert.deepStrictEqual(actual, false);
  });

  it('should be able to check if buyer has enough funds', function() {
    transaction.seller.addRecord(record);
    transaction.buyer.addFunds(100);
    const actual = transaction.hasEnoughFunds();
    assert.strictEqual(actual, true);
  })
  it('should be able to handle an exchange of a record when the seller has the' +
  'record and the buyer has enough funds', function() {
    collector.addFunds(100);
    store.addRecord(record);
    transaction.handleTransaction();
    const collectorRecords = transaction.buyer.records.length;
    const collectorFunds = transaction.buyer.funds;
    const storeRecords = transaction.seller.records.length;
    const storeFunds = transaction.seller.funds;
    assert.strictEqual(collectorRecords, 1);
    assert.strictEqual(storeRecords, 0);
    assert.strictEqual(collectorFunds, 90);
    assert.strictEqual(storeFunds, 10);
  });


});
