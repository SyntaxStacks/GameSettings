angular.module('GameSettings.difficulty')
  .controller('DifficultyCtrl', ['$state', '$scope',
    function ($state, $scope) {
      $scope.difficulties = [{
        label: 'Default',
        default: true,
        settings: [{
          label: 'maxEnemies',
          value: '10'
        }]
      },{
        label: 'Easy',
        default: false,
        settings: [{
          label: 'maxEnemies',
          value: '20'
        },{
          label: 'lives',
          value: '5'
        }]
      }];

      //move to difficulty service
      $scope.setCurrentDifficulty = function (difficulty) {
        $scope.currentDifficulty = difficulty;
        $scope.updateSettings();
      };
      $scope.toggleAddDifficulty = function () {
        $scope.addDifficultyFlag = !$scope.addDifficultyFlag;
      }


      $scope.addDifficulty = function (difficulty) {
        $scope.toggleAddDifficulty();
        $scope.difficulties.push({
          label: difficulty,
          settings: []
        });
      };

      //move to settings service
      $scope.toggleAddSetting = function () {
        $scope.addSettingFlag = !$scope.addSettingFlag;
      },

      $scope.addSetting = function (setting) {
        $scope.toggleAddSetting();
        $scope.currentDifficulty.settings.push(_.clone(setting));
        $scope.updateSettings();
        $scope.setting = {};
      };
      $scope.updateSettings = function () {
        var defaultSettings = _.find($scope.difficulties, { default: true }).settings;
        defaultSettings = _.transform(defaultSettings, function (obj, setting) {
          obj[setting.label] = setting.value;
          return obj;
        }, {});

        var currentSettings = $scope.currentDifficulty.settings;
        currentSettings = _.transform(currentSettings, function (obj, setting) {
          obj[setting.label] = setting.value;
          return obj;
        }, {});

        currentSettings = _.merge(defaultSettings, currentSettings);
        $scope.currentSettings = _.transform(currentSettings, function (arr, value, label) {
          arr.push({
            label: label,
            value: value
          });
          return arr;
        }, []);
      };

      $scope.makeDefaultSettings = function () {
        $scope.difficulties = _.map($scope.difficulties, function (difficulty) {
          if (difficulty.label == $scope.currentDifficulty.label) {
            difficulty.default = true;
          } else {
            difficulty.default = false;
          }

          return difficulty;
        });
        $scope.updateSettings();
      };
      $scope.setCurrentDifficulty($scope.difficulties[0]);
      $scope.addDifficultyFlag = false;
      $scope.addSettingFlag = false;
    }
  ]);
