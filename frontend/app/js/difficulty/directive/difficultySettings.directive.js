angular.module('GameSettings.difficulty')
  .directive('difficultySettings', [function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/difficulty/template/difficultySettings.tpl.html',
    };
  }]);


