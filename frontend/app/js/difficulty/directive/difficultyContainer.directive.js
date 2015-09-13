angular.module('GameSettings.difficulty')
  .directive('difficultyContainer', [function () {
    return {
      restrict: 'E',
      templateUrl: 'app/js/difficulty/template/difficultyContainer.tpl.html',
    };
  }]);


