var _ = require('lodash');
var setting = require('../controller/setting.ctrl');

var respond = function (res, settings) {
  res.statusCode = 200;
  res.send(settings);
}

var error = function (res, error) {
  res.statusCode = 400;
  res.send();
};

module.exports = {
    post: function (req, res) {
      var level = req.param.level;
      var body = JSON.parse(req.body);
      return setting.create(level, body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    get: function (req, res) {
      var level = req.param.level;
      return setting.read(level)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    put: function (req, res) {
      var level = req.param.level;
      var body = JSON.parse(req.body);
      return setting.update(level, body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    delete: function (req, res) {
      var level = req.param.level;
      return setting.delete(level)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    }
};
