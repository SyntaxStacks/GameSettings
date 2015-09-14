angular.module('GameSettings.difficulty')
  .controller('DifficultyCtrl', ['Difficulty', '$scope',
    function (Difficulty, $scope) {
      // Difficulty.setDifficulties([{
      //   label: 'Default',
      //   default: true,
      //   settings: [{
      //     label: 'maxEnemies',
      //     value: '10'
      //   }]
      // },{
      //   label: 'Easy',
      //   default: false,
      //   settings: [{
      //     label: 'maxEnemies',
      //     value: '20'
      //   },{
      //     label: 'lives',
      //     value: '5'
      //   }]
      // }]);
      Difficulty.setDefaultDifficulties();
      $scope.Difficulty = Difficulty;
    }
  ]);
