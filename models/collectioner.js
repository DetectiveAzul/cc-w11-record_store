const Collectioner = function(name) {
  this.name = name
  this.funds = 0;
  this.records = [];
}

Collectioner.prototype.addFunds = function (amount) {
  this.funds += amount;
};

Collectioner.prototype.removeFunds = function (amount) {
  this.funds -= amount;
};

Collectioner.prototype.addRecord = function (record) {
  this.records.push(record);
};

Collectioner.prototype.removeRecord = function (record) {
  const index = this.records.indexOf(record);
  if (index != -1) {
    return this.records.splice(index, 1)[0];
  };
};

Collectioner.prototype.hasTheRecord = function (recordTitle) {
  return this.records.some( (record) => {
    return record.title === recordTitle;
  })
};

Collectioner.prototype.findRecordByTitle = function (recordTitle) {
  let foundRecord = null;
  for (record of this.records) {
    if (record.title === recordTitle) foundRecord = record;
  }
  return foundRecord;
}

Collectioner.prototype.hasEnoughFunds = function (price) {
  return this.funds >= price;
};

Collectioner.prototype.buyRecord = function (record) {
  if (this.hasEnoughFunds(record.price)) {
    this.addRecord(record);
    this.removeFunds(record.price);
  }
};

Collectioner.prototype.sellRecord = function (recordTitle) {
  let recordToSell = null;
  if (this.hasTheRecord(recordTitle)) {
    recordToSell = this.findRecordByTitle(recordTitle);
    this.addFunds(recordToSell.price);
    this.removeRecord(recordToSell)
  }
  return recordToSell;
}

Collectioner.prototype.sellRecord = function (record) {
  if (this.hasTheRecord(record.title)) {
    this.addFunds(record.price);
    this.removeRecord(record)
  }
  return record;
}

module.exports = Collectioner;
