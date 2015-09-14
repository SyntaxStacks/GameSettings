angular.module('GameSettings.difficulty')
  .factory('Difficulty', ['DifficultyAPI', function  (DifficultyAPI) {
    return Object.create({
      difficulties: [],
      currentDifficulty: {},
      currentSettings: {},
      addSettingFlag: false,
      addDifficultyFlag: false
    },{
      setDifficulties: {
        value: function (difficulties) {
          this.difficulties = difficulties;
        }
      },
      setDefaultDifficulties: {
        value: function () {
          var me = this;
          var success = function (res) {
            me.setDifficulties(res.data);
            me.setCurrentDifficulty(me.difficulties[0]);
            console.log(me.currentDifficulty);
          };

          DifficultyAPI.getAllDifficulty()
            .then(success);
        }
      },
      setCurrentDifficulty: {
        value: function (difficulty) {
          this.currentDifficulty = difficulty;
          this.refreshSettings();
        }
      },
      toggleAddDifficulty: {
        value: function () {
          this.addDifficultyFlag = !this.addDifficultyFlag;
        },
      },
      addDifficulty: {
        value: function (difficulty) {
          var me = this;
          var success = function (res) {
            me.difficulties.push({
              label: difficulty,
              settings: []
            });
          };
          me.toggleAddDifficulty();
          DifficultyAPI.addDifficulty(difficulty)
            .then(success);
        }
      },
      removeDifficulty: {
        value: function (difficulty) {
          var me = this;
          var success = function (res) {
            me.difficultyies = _.remove(me.difficulties, function (diff) {
              return diff.label == difficulty;
            });
          };
          DifficultyAPI.removeDifficulty(difficulty)
            .then(success);
        }
      },
      toggleAddSetting: {
        value: function () {
          this.addSettingFlag = !this.addSettingFlag;
        }
      },
      addSetting:{
        value: function (setting) {
          this.toggleAddSetting();
          var me = this;
          var success = function () {
            me.currentDifficulty.settings.push(_.clone(setting));
            me.refreshSettings();
          };

          DifficultyAPI.addSetting(me.currentDifficulty.label, setting.label, setting.value)
            .then(success);
        }
      },
      updateSetting: {
        value: function (label, setting) {
          var me = this;
          var success = function (res) {
            var currentSetting = _.find(me.currentDifficulty.settings, { label: label });
            currentSetting.label = setting.label;
            currentSetting.value = setting.value;
            me.refreshSettings();
          };
          DifficultyAPI.updateSetting(me.CurrentDifficulty.label, label, setting.label, setting.value)
            .then(success);
        }
      },
      removeSetting: {
        value: function (removeSetting) {
          var currentSetting = _.remove(this.currentDifficulty.settings, function (setting) {
            return setting.label == removeSetting.label;
          });
          this.refreshSettings();
        }
      },
      refreshSettings: {
        value: function () {
          var defaultSettings = _.find(this.difficulties, { isDefault: true }).settings;
          defaultSettings = _.transform(defaultSettings, function (obj, setting) {
            obj[setting.label] = setting.value;
            return obj;
          }, {});

          var currentSettings = this.currentDifficulty.settings;
          currentSettings = _.transform(currentSettings, function (obj, setting) {
            obj[setting.label] = setting.value;
            return obj;
          }, {});

          currentSettings = _.merge(defaultSettings, currentSettings);
          this.currentSettings = _.transform(currentSettings, function (arr, value, label) {
            arr.push({
              label: label,
              value: value
            });
            return arr;
          }, []);
        }
      },
      makeDefaultSettings: {
        value: function () {
          var me = this;
          var success = function (res) {
            var diffs = _.map(me.difficulties, function (difficulty) {
              if (difficulty.label == me.currentDifficulty.label) {
                difficulty.default = true;
              } else {
                difficulty.default = false;
              }

              return difficulty;
            });
            me.setDifficulties(diffs);
            me.refreshSettings();
          }
          DifficultyAPI.updateDifficulty(me.currentDifficulty.label, true)
            .then(success);
        }
      }
    });
  }]);

