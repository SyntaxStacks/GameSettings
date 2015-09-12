var _ = require('lodash');
var mongoose = require('mongoose');
var promise = require('bluebird');

var settingSchema = new mongoose.Schema({
  label: String,
  value: mongoose.Schema.Types.Mixed,
  setting_id: mongoose.Schema.Types.ObjectId
});

var model = mongoose.model('settings', settingSchema);

module.exports = {
  model: model,
  create: function (opts) {
    var me = this;
    return new Promise(function (resolve, reject) {
      var build = {
        label: opts.label,
        value: opts.value,
        difficulty_id: opts.difficulty_id
      };
      return me.model.create(build)
        .exec(function (err, setting) {
          if (err) { return reject(err); }
          resolve(setting);
        });
    });
  },
  read: function (settingLabel) {
    var me = this;
    return new Promise(function (resolve, reject) {
      var search;
      if (_.isString(level)) {
        search = me.model.findOne({ label: settingLabel })
      } else {
        search = me.model.find();
      }
      serach.exec(function (err, setting) {
        if (err) { return reject(err); }
        resolve(setting);
      });
    });
  },
  update: function (level, data) {
    return new Promise(function (resolve, reject) {
      return me.model.findOneAndUpdate({label: level}, data, null, function (err, setting) {
        if (err) { return reject(err); }
        resolve(setting);
      });
    });
  },
  destroy: function (level) {
    return new Promise(function (resolve, reject) {
      resolve(me.model.remove({ label: level}));
    });
  }
};
