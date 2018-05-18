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

module.exports = Collectioner;
