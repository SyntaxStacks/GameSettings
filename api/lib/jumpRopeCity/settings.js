var promise = require('bluebird');
var jumpRopeCityModel = require('./model');

function settings (level) {
  return jumpRopeCityModel.get()
    .then(function (settings) {
      return _.merge(settings.default, settings[level]);
    });
}

function update (level, data) {
  //validate payloads
  return jumpRopeCityModel.update(data)
    .then(function (settings) {
      return settings[level];
    });

}

module.exports = {
  get: {
    default: settings.bind(this, 'default'),
    easy: settings.bind(this, 'easy'),
    normal: settings.bind(this, 'normal'),
    hard: settings.bind(this, 'hard'),
  },
  update: {
    default: update.bind(this, 'default'),
    easy: update.bind(this, 'easy'),
    normal: update.bind(this, 'normal'),
    hard: update.bind(this, 'hard'),
  }
};
