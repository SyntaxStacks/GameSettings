var _ = require('lodash');
var mongoose = require('mongoose');
var promise = require('bluebird');
var gameTitle = "JumpRopeCity"+Date.now();
var gameQuery = { title: gameTitle };

var difficultySchema = new mongoose.Schema({
  label: String,
  isDefault: Boolean,
  settings: [{ label: String, value: mongoose.Schema.Types.Mixed}]
});

var model = mongoose.model('Difficulty', difficultySchema);

module.exports = {
  model: model,
  create: function (difficulty, isDefault, settings) {
    var me = this;
    return new promise(function (resolve, reject) {
      var build = {
        label: difficulty,
        isDefault: isDefault,
        settings: settings
      };
      return me.model.create(build, function (err, difficulty) {
          if (err) { return reject(err); }
          resolve(difficulty);
        });
    });
  },
  read: function (difficulty) {
    var me = this;
    return new Promise(function (resolve, reject) {
      var search;
      if (_.isUndefined(difficulty)) {
        search = me.model.find();
      } else {
        search = me.model.findOne({ label: difficulty });
      }
      return search.exec(function (err, difficulty) {
        if (err) { return reject(err); }
        resolve(difficulty);
      });
    });
  },
  update: function (difficulty, isDefault, settings) {
    var me = this;
    return new promise(function (resolve, reject) {
      var data = {};
      if (isDefault) {
        data.isDefault = isDefault;
        if (settings) {
          data.settings = settings;
        }
      }
      return me.model.findOneAndUpdate({label: difficulty}, data, { new: true, upsert: true }, function (err, diff) {
        if (err) { return reject(err); }
        resolve(diff);
      });
    });
  },
  destroy: function (difficulty) {
    var me = this;
    return new Promise(function (resolve, reject) {
      resolve(me.model.remove({ label: difficulty }));
    });
  },
  createSetting: function (difficulty, label, value) {
    var me = this;
    return new Promise(function (resolve, reject) {
      return me.model.findOne({ label: difficulty }, function (err, diff) {
        if (err || diff == null) { return reject(err); }
        var setting = {
          label: label,
          value: value
        };

        var currentSetting = _.find(diff.settings, { label: label });
        if (_.isUndefined(currentSetting)) {
          diff.settings.push(setting);
        } else {
          currentSetting.value = value;
        };

        diff.save(function (err) {
          if (err) { return reject(err); }
          resolve(diff);
        });
      });
    });
  },
  readSetting: function (difficulty, label) {
    var me = this;
    return new Promise(function (resolve, reject) {
      return me.model.findOne({ label: difficulty }, function (err, diff) {
        if (err || diff == null) { return reject(err); }

        var setting = _.find(diff.settings, { label: label });
        if (_.isUndefined(setting)) {
          return reject();
        }
        resolve(setting);
      });
    });
  },
  updateSetting: function (difficulty, settingName, label, value) {
    var me = this;
    return new Promise(function (resolve, reject) {
      return me.model.findOne({ label: difficulty }, function (err, diff) {
        if (err) { return reject(err); }
        var setting = _.find(diff.settings, { label: settingName });
        if (_.isUndefined(setting)) {
          return me.createSetting(difficulty, label, value)
            .then(resolve);
        }
        setting.label = label;
        setting.value = value;

        diff.save(function (err) {
          if (err) { return reject(err); }
          resolve(diff);
        });
      });
    });
  },
  destroySetting: function (difficultyName, label) {
    var me = this;
    return new Promise(function (resolve, reject) {
      return me.model.findOne({ label: difficultyName }, function (err, diff) {
        if (err || diff == null) { return reject(err); }
        diff.settings = _.remove(diff.settings, function (setting) {
          return setting.label != label;
        });
        diff.save(function (err) {
          if (err) { return reject(err); }
          resolve(diff);
        });
      });
    });
  }
};
