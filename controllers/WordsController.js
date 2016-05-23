angular.module('wordist').controller('WordsController', WordsController);

function WordsController ($scope, $state, usersService) {
  var token = localStorage.getItem('wordistToken');

  if (token) {
    usersService.getWords().then(function (data) {
      $scope.words = data.data;
    });
  }
}
