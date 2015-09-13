angular.module('GameSettings.difficulty')
  .directive('difficultyNav', [function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/difficulty/template/difficultyNav.tpl.html',
    };
  }]);


