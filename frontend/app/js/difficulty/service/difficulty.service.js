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
          this.currentDifficulty.settings.push(_.clone(setting));
          this.refreshSettings();
        }
      },
      updateSetting: {
        value: function (setting) {
          var currentSetting = _.find(this.currentDifficulty.settings, { label: setting.label });
          currentSetting.value = setting.value;
          this.refreshSettings();
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
                 console.log(this.difficulties);
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
          var diffs = _.map(me.difficulties, function (difficulty) {
            if (difficulty.label == me.currentDifficulty.label) {
              difficulty.default = true;
            } else {
              difficulty.default = false;
            }

            return difficulty;
          });
          this.setDifficulties(diffs);
          this.refreshSettings();
        }
      }
    });
  }]);

