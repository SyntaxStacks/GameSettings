var promise = require('bluebird');
var difficulty = require('../model/difficulty.model');

module.exports = {
  create: function (opts) {
    return difficulty.create(opts);
  },
  read: function (level) {
    return difficulty.read(level);
  },
  update: function (level, data) {
    return difficulty.update(level, data);
  },
  delete: function (level) {
    return difficulty.destroy(level);
  }
};
