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
          value: function (difficulty, label, value) {
            var success = function (res) {

            };
            var failure = function (res) {

            };
            var url = [this.apiPath, 'difficulty', difficulty, 'setting', label, value].join('/');
            $http.post(url, body)
              .then(success, failure);
          }
        },
        updateSetting: {
          value: function (difficulty, label, value) {
            var success = function (res) {

            };
            var failure = function (res) {

            };
            var url = [this.apiPath, 'difficulty', difficulty, setting, label, value].join('/');
            $http.put(url, body)
              .then(success, failure);
          }
        },
        removeSetting: {
          value: function (difficulty, label) {
            var success = function (res) {

            };
            var failure = function (res) {

            };
            var url = [this.apiPath, 'difficulty', difficulty, 'setting',  label].join('/');
            $http.delete(url)
              .then(success, failure);

          }
        },
        getSetting: {
          value: function (difficulty, label) {
            var success = function (res) {

            };
            var failure = function (res) {

            };
            var url = [this.apiPath, 'difficulty', difficulty, 'setting', label].join('/');
            $http.get(url)
              .then(success, failure);
          }
        }
      });
    }];
  });


