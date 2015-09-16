angular.module('GameSettings.difficulty')
  .controller('DifficultyCtrl', ['Difficulty', '$scope',
    function (Difficulty, $scope) {
      Difficulty.setDefaultDifficulties();
      $scope.Difficulty = Difficulty;
    }
  ]);
