const Collectioner = require('./collectioner.js')

const Collector = function(name) {
  Collectioner.call(this, name);
  Collector.prototype = Object.create(Collectioner.prototype);
}

module.exports = Collector;
