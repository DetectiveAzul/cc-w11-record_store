const Collectioner = require('./collectioner.js')

const Store = function(name) {
  Collectioner.call(this, name);
  Store.prototype = Object.create(Collectioner.prototype);
}

module.exports = Store;
