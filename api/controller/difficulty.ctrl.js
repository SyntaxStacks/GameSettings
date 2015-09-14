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
    return new promise(function (resolve, reject) {
      if (isDefault == true) {
        return difficultyModel.model.update({ isDefault: false}, function () {
          resolve(difficultyModel.update(difficulty, isDefault, settings));
        });
      }
      resolve(difficultyModel.update(difficulty, isDefault, settings));
    });
  },
  delete: function (difficulty) {
    return difficultyModel.destroy(difficulty);
  }
};
