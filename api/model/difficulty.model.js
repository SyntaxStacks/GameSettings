var _ = require('lodash');
var mongoose = require('mongoose');
var promise = require('bluebird');
var gameTitle = "JumpRopeCity"+Date.now();
var gameQuery = { title: gameTitle };

var difficultySchema = new mongoose.Schema({
  label: String,
  settings: [mongoose.Schema.Types.ObjectId]
});

var model = mongoose.model('Difficulty', difficultySchema);

module.exports = {
  model: model,
  create: function (opts) {
    var me = this;
    return new Promise(function (resolve, reject) {
      var build = {
        label: opts.label,
        value: opts.value,
        settings: opts.settings
      };
      return me.model.create(build)
        .exec(function (err, difficulty) {
          if (err) { return reject(err); }

          resolve(difficulty);
        });
    });
  },
  read: function (level) {
    var me = this;
    return new Promise(function (resolve, reject) {
      var search;
      if (_.isString(level)) {
        search = me.model.findOne({ label: level })
      } else {
        search = me.model.find();
      }
      serach.exec(function (err, difficulty) {
        if (err) { return reject(err); }
        resolve(difficulty);
      });
    });
  },
  update: function (level, data) {
    var me = this;
    return new Promise(function (resolve, reject) {
      return me.model.findOneAndUpdate({label: level}, data, null, function (err, difficulty) {
        if (err) { return reject(err); }
        resolve(difficulty);
      });
    });
  },
  destroy: function (level) {
    var me = this;
    return new Promise(function (resolve, reject) {
      resolve(me.model.remove({ label: level}));
    });
  }
};
