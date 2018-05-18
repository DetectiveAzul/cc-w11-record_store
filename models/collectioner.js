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

Collectioner.prototype.hasTheRecord = function (recordName) {
  return this.records.some( (record) => {
    return record.name === recordName;
  })
};

Collectioner.prototype.findRecordByTitle = function (recordTitle) {
  let foundRecord = null;
  for (record of this.records) {
    if (record.title === recordTitle) foundRecord = record;
  }
  return foundRecord;
}

module.exports = Collectioner;
