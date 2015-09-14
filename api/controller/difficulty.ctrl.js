var promise = require('bluebird');
var difficultyModel = require('../model/difficulty.model');

module.exports = {
  create: function (difficulty, isDefault, settings) {
    return new promise(function (resolve, reject) {
      if (isDefault == true) {
        return difficultyModel.model.update({}, { isDefault: false }, { multi: true }, function (err) {
          if (err) { return reject(err); }

          difficultyModel.create(difficulty, isDefault, settings)
            .then(resolve);
        });
      }
      difficultyModel.create(difficulty, isDefault, settings)
        .then(resolve);
    });
  },
  read: function (difficulty) {
    return difficultyModel.read(difficulty);
  },
  update: function (difficulty, isDefault, settings) {
    return new promise(function (resolve, reject) {
      if (isDefault == true) {
        return difficultyModel.model.update({}, { isDefault: false }, { multi: true }, function (err) {
          if (err) { return reject(err); }

          difficultyModel.update(difficulty, isDefault, settings)
            .then(resolve);
        });
      }
      difficultyModel.update(difficulty, isDefault, settings)
        .then(resolve);
    });
  },
  delete: function (difficulty) {
    return difficultyModel.destroy(difficulty);
  }
};
