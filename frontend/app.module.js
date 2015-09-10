angular.module('GameSettings', [
  'GameSettings.difficulty'
])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('difficulty', {
        url: '/',
        templateUrl: 'app/views/difficulty.html',
        controller: 'DifficultyCtrl'
      })
      .state('easy', {
        url: '/easy',
        templateUrl: 'app/views/easy.html',
        controller: 'DifficultyCtrl'
      })
      .state('medium', {
        url: '/medium',
        templateUrl: 'app/views/medium.html',
        controller: 'DifficultyCtrl'
      })
      .state('hard', {
        url: '/hard',
        templateUrl: 'app/views/hard.html',
        controller: 'DifficultyCtrl'
      });
  }]);
