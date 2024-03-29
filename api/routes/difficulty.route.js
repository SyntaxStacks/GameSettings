var _ = require('lodash');
var promise = require('bluebird');
var mongoose = require('mongoose');
var difficultyCtrl = require('../controller/difficulty.ctrl');

var ok = function (res, difficulties) {
  res.statusCode = 200;
  res.send(difficulties);
}

var created = function (res, difficulty) {
  res.statusCode = 201;
  res.send(difficulty);
}

var noContent = function (res) {
  res.statusCode = 204;
  res.send();
}

var error = function (res, error) {
  res.statusCode = 400;
  res.send();
}

module.exports = {
  post: function (req, res) {
    var difficulty = req.params.difficulty;
    var body = req.body;

    var isDefault = body.isDefault || false;
    var settings = body.settings || [];
    return difficultyCtrl.create(difficulty, isDefault, settings)
      .then(_.partial(created, res))
      .catch(_.partial(error, res));
  },
  get: function (req, res) {
    var difficulty = req.params.difficulty || undefined;
    return difficultyCtrl.read(difficulty)
      .then(_.partial(ok, res))
      .catch(_.partial(error, res));
  },
  put: function (req, res) {
    var difficulty = req.params.difficulty;
    var body = req.body;
    var isDefault = body.isDefault;
    var settings = body.settings;
    return difficultyCtrl.update(difficulty, isDefault, settings)
      .then(_.partial(ok, res))
      .catch(_.partial(error, res));
  },
  delete: function (req, res) {
    var difficulty = req.params.difficulty;
    return difficultyCtrl.delete(difficulty)
      .then(_.partial(noContent, res))
      .catch(_.partial(error, res));
  },
  reset: function (req, res) {
    // this is for testing purposes, would not leave in prod
    var model = require('../model/difficulty.model');
    mongoose.connection.db.dropDatabase(function () {
      var difficulties = [
        model.create('Easy', true, [{
          label: 'health',
          value: 150
        },{
          label: 'enemies',
          value: 20
        }]),
        model.create('Normal', false, [{
          label: 'health',
          value: 150
        }]),
        model.create('Hard', false, [{
          label: 'health',
          value: 50
        },{
          label: 'enemies',
          value: 50
        }])
      ];

      promise.all(difficulties)
        .then(function () {
          res.statusCode = 200;
          res.send();
        }, function (err) {
          res.statusCode = 400;
          res.send(err);
        });

    });
  }
};
