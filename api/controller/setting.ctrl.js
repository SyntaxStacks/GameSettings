var _ = require('lodash');
var promise = require('bluebird');
var difficultyModel = require('../model/difficulty.model');

module.exports = {
  create: function (difficulty, label, value, type) {
    return new promise(function (resolve, reject) {
      var labelMatchesPattern = /^[a-z0-9\.-]+$/.test(label);
      var settingIsProperType = _.contains(['string', 'number', 'boolean', 'null'], type.toLowerCase());

      if (!(labelMatchesPattern && settingIsProperType)) {
        return reject({ error: 'invalid setting' });
      }

      switch (type.toLowerCase()) {
        case 'number':
          value = parseInt(value) || 0;
          break;
        case 'boolean':
          value = Boolean(value);
          break;
        case 'null':
          value = null;
          break;
        case 'string':
          value = escape(value);
          break;
        default:
          return reject({ error: 'invalid setting type' });
          break;
      }
      return difficultyModel.createSetting(difficulty, label, value)
        .then(resolve)
        .catch(reject);
    });
  },
  read: function (difficulty, label) {
    return difficultyModel.readSetting(difficulty, label);
  },
  update: function (difficulty, settingName, label, value, type) {
    return new promise(function (resolve, reject) {
      switch (type.toLowerCase()) {
        case 'number':
          value = parseInt(value) || 0;
          break;
        case 'boolean':
          value = Boolean(value);
          break;
        case 'null':
          value = null;
          break;
        case 'string':
          value = escape(value);
          break;
        default:
          return reject({ error: 'invalid setting type' });
          break;
      }
      return difficultyModel.updateSetting(difficulty, settingName, label, value)
        .then(resolve)
        .catch(reject);
    });
  },
  delete: function (difficulty, label) {
    return difficultyModel.destroySetting(difficulty, label);
  }
};
