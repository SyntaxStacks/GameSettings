var _ = require('lodash');
var mongoose = require('mongoose');
var promise = require('bluebird');
var gameTitle = "JumpRopeCity"+Date.now();
var gameQuery = { title: gameTitle };
var settingsSchema = new mongoose.Schema({
  title:  String,
  default: String,
  easy: String,
  normal: String,
  hard: String
});
var model = mongoose.model('GameSettings', settingsSchema);

//Test Data
model.create({
  title: gameTitle,
  default: '{"maxEnemies":100}',
  easy: '{"enemyColor":"#00FF00"}',
  normal: '{"maxEnemies":200,"enemyColor":"#0000FF"}',
  hard: '{maxEnemies:300,"enemyColor":"#FF0000"}'
});

module.exports = {
  get: function () {
    return new Promise(function (resolve, reject) {
      return model.findOne(gameQuery)
        .exec(function (err, settings) {
          if (err) {
            return reject(err);
          }

          _.each(['default', 'easy', 'normal', 'hard'], function (level) {
            try {
              settings[level] = JSON.parse(settings[level]);
            } catch (e) {
              settings[level] = [];
            }
          });
          resolve(settings);
        });
    });
  },
  update: function (data) {
    return new Promise(function (resolve, reject) {
      return model.findOneAndUpdate(gameQuery, data, null, function (err, settings) {
        if (err) {
          return reject(err);
        }

        resolve(settings);
      });
    });
  }
};
