var _ = require('lodash');
var difficulty = require('../controller/difficulty.ctrl');

var respond = function (res, difficultys) {
  res.statusCode = 200;
  res.send(difficultys);
}

var error = function (res, error) {
  res.statusCode = 400;
  res.send();
};

module.exports = {
  post: function (req, res) {
    var level = req.param.level;
    var body = JSON.parse(req.body);
    return difficulty.create(level, body)
      .then(_.partial(respond, res))
      .catch(_.partial(error, res));
  },
  get: function (req, res) {
    var level = req.param.level || undefined;
    return difficulty.read(level)
      .then(_.partial(respond, res))
      .catch(_.partial(error, res));
  },
  put: function (req, res) {
    var level = req.param.level;
    var body = JSON.parse(req.body);
    return difficulty.update(level, body)
      .then(_.partial(respond, res))
      .catch(_.partial(error, res));
  },
  delete: function (req, res) {
    var level = req.param.level;
    return difficulty.delete(level)
      .then(_.partial(respond, res))
      .catch(_.partial(error, res));
  }
};
