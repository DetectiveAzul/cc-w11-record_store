const Transaction = function(buyer, seller, recordTitle) {
  this.buyer = buyer;
  this.seller = seller;
  this.recordTitle = recordTitle;
}

module.exports = Transaction;

Transaction.prototype.getRecord = function() {
  return this.seller.findRecordByTitle(this.recordTitle);
};

Transaction.prototype.hasTheRecord = function () {
  return this.seller.hasTheRecord(this.recordTitle);
};

Transaction.prototype.hasEnoughFunds = function() {
  return this.buyer.hasEnoughFunds(this.getRecord().price);
};

Transaction.prototype.handleTransaction = function () {
  if (this.hasTheRecord() && this.hasEnoughFunds()) {
    const record = this.getRecord();
    this.seller.sellRecord(record);
    this.buyer.buyRecord(record);
    return true;
  }
  return false;
};
