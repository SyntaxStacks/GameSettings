var promise = require('bluebird');
var setting = require('../model/setting.model');

module.exports = {
  create: function (opts) {
    return setting.create(opts);
  },
  read: function (level) {
    return setting.read(level);
  },
  update: function (level, data) {
    return setting.update(level, data);
  },
  delete: function (level) {
    return setting.destroy(level);
  }
};
