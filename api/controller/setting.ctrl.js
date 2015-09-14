var _ = require('lodash');
var promise = require('bluebird');
var difficultyModel = require('../model/difficulty.model');

module.exports = {
  create: function (difficulty, label, setting) {
    return new promise(function (resolve, reject) {
      var labelMatchesPattern = /^[a-z0-9\.-]+$/.test(label);
      var settingIsProperType = _.contains(['string', 'number', 'boolean'], typeof setting) || setting === null;

      if (!(labelMatchesPattern && settingIsProperType)) {
        console.log(labelMatchesPattern);
        console.log(settingIsProperType);
        return reject();
      }

      return difficultyModel.createSetting(difficulty, label, setting)
        .then(resolve)
        .catch(reject);
    });
  },
  read: function (difficulty, label) {
    return difficultyModel.readSetting(difficulty, label);
  },
  update: function (difficulty, label, setting) {
    return difficultyModel.updateSetting(difficulty, label, setting);
  },
  delete: function (difficulty, label) {
    return difficultyModel.destroySetting(difficulty, label);
  }
};
