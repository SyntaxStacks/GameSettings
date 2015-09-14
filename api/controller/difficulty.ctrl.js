var promise = require('bluebird');
var difficultyModel = require('../model/difficulty.model');

module.exports = {
  create: function (difficulty, isDefault, settings) {
    return difficultyModel.create(difficulty, isDefault, settings);
  },
  read: function (difficulty) {
    return difficultyModel.read(difficulty);
  },
  update: function (difficulty, isDefault, settings) {
    return difficultyModel.update(difficulty, isDefault, settings);
  },
  delete: function (difficulty) {
    return difficultyModel.destroy(difficulty);
  }
};
