angular.module('wordist').controller('WordsController', WordsController);

function WordsController ($scope, $state, usersService) {
  $scope.loadingMessage = 'Loading words...';

  var token = localStorage.getItem('wordistToken');

  if (token) {
    usersService.getWords().then(function (data) {
      $scope.loadingMessage = '';
      $scope.words = data.data;
    });
  }
}
