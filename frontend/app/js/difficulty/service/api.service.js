angular.module('GameSettings.difficulty')
  .provider('DifficultyAPI', function ($http) {
    this.$get = ['$http', function ($http) {
      return Object.create({
        apiPath: '/api',
      },{
        addDifficulty: {
          value: function (label, isDefault, settings) {
            var url = this.apiPath + '/difficulty/' + label;
            var body = {
              isDefault: isDefault || false,
              settings: settings || []
            };
            return $http.post(url, body);
          }
        },
        updateDifficulty: {
          value: function (label, isDefault, settings) {
            var url = this.apiPath + '/difficulty/' + label;
            var body = {};
            if (isDefault) {
              body.isDefault = isDefault;
              if (settings) {
                body.settings = settings;
              }
            };
            return $http.put(url, body);
          }
        },
        removeDifficulty: {
          value: function (label) {
            var url = this.apiPath + '/difficulty/' + label;
            return $http.delete(url);
          }
        },
        getDifficulty: {
          value: function (label) {
            var url = this.apiPath + '/difficulty/' + label;
            return $http.get(url);
          }
        },
        getAllDifficulty: {
          value: function (label) {
            var url = this.apiPath + '/difficulty/';
            return $http.get(url);
          }
        },
        addSetting: {
          value: function (difficulty, label, value, type) {
            var url = [this.apiPath, 'difficulty', difficulty, 'setting', label, 'value', value, 'type', type].join('/');
            return $http.post(url);
          }
        },
        updateSetting: {
          value: function (difficulty, settingName, label, value, type) {
            var url = [this.apiPath, 'difficulty', difficulty, 'setting', settingName, 'value', value, 'type', type, 'label', label].join('/');
            return $http.put(url);
          }
        },
        removeSetting: {
          value: function (difficulty, label) {
            var url = [this.apiPath, 'difficulty', difficulty, 'setting',  label].join('/');
            return $http.delete(url);
          }
        },
        getSetting: {
          value: function (difficulty, label) {
            var url = [this.apiPath, 'difficulty', difficulty, 'setting', label].join('/');
            return $http.get(url);
          }
        },
        resetDatabase: {
          value: function () {
            return $http.post(this.apiPath + '/reset-database');
          }
        }
      });
    }];
  });


