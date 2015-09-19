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
  res.send(error);
};

module.exports = {
  post: function (req, res) {
    var difficulty = req.params.difficulty;
    var label = req.params.label;
    var value = req.params.value;
    var type = req.params.type;
    return settingCtrl.create(difficulty, label, value, type)
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
    var settingName = req.params.settingName;
    var label = req.params.label;
    var value = req.params.value;
    var type = req.params.type;
    return settingCtrl.update(difficulty, settingName, label, value, type)
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
