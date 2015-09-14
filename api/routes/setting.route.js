var _ = require('lodash');
var settingCtrl = require('../controller/setting.ctrl');

var ok = function (res, settings) {
  res.statusCode = 200;
  res.send(settings);
};

var created = function (res, settings) {
  res.statusCode = 201;
  res.send(settings);
};

var noContent = function (res) {
  res.statusCode = 204;
  res.send();
}

var error = function (res, error) {
  res.statusCode = 400;
  res.send();
};

module.exports = {
  post: function (req, res) {
    var difficulty = req.params.difficulty;
    var label = req.params.label;
    var setting = req.params.value;
    return settingCtrl.create(difficulty, label, setting)
      .then(_.partial(created, res))
      .catch(_.partial(error, res));
  },
  get: function (req, res) {
    var difficulty = req.params.difficulty;
    var label = req.params.label;
    return settingCtrl.read(difficulty, label)
      .then(_.partial(ok, res))
      .catch(_.partial(error, res));
  },
  put: function (req, res) {
    var difficulty = req.params.difficulty;
    var label = req.params.label;
    var setting = req.params.value;
    return settingCtrl.update(difficulty, label, setting)
      .then(_.partial(ok, res))
      .catch(_.partial(error, res));
  },
  delete: function (req, res) {
    var difficulty = req.params.difficulty;
    var label = req.params.label;
    return settingCtrl.delete(difficulty, label)
      .then(_.partial(noContent, res))
      .catch(_.partial(error, res));
  }
};
