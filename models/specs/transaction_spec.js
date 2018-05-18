const assert = require('assert');
const Transaction = require('../transaction.js');
const Record = require('../record.js');
const Collector = require('../record_collector.js');
const Store = require('../record_store.js');


describe('Transaction', function () {
  let transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  it('should have a buyer');
  it('should have a seller');
  it('should be able to handle an exchange of a record when the seller has the' +
  'record and the buyer has enough funds');


});
