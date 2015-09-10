var _ = require('lodash');
var jumpRopeCitySettings = require('../lib/jumpRopeCity/settings');

var respond = function (res, settings) {
  res.statusCode = 200;
  res.send(settings);
}

var error = function (res, error) {
  res.statusCode = 400;
  res.send();
};

module.exports = {
  default: {
    get: function (req, res) {
      jumpRopeCitySettings
        .get.default()
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    post: function (req, res) {
      var body = JSON.parse(req.body);
      jumpRopeCitySettings
        .update.default( body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    }
  },
  easy: {
    get: function (req, res) {
      jumpRopeCitySettings
        .get.easy()
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));

    },
    post: function (req, res) {
      var body = JSON.parse(req.body);
      jumpRopeCitySettings
        .update.easy(body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    }
  },
  normal: {
    get: function (req, res) {
      jumpRopeCitySettings
        .get.normal()
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    post: function (req, res) {
      var body = JSON.parse(req.body);
      jumpRopeCitySettings
        .update.normal(body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    }
  },
  hard: {
    get: function (req, res) {
      jumpRopeCitySettings
        .get.hard()
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    },
    post: function (req, res) {
      var body = JSON.parse(req.body);
      jumpRopeCitySettings
        .update.hard(body)
        .then(_.partial(respond, res))
        .catch(_.partial(error, res));
    }
  }
};
