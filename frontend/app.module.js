angular.module('GameSettings', [
  'ui.router',
  'ui.bootstrap',
  'GameSettings.difficulty'
])
  .config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
