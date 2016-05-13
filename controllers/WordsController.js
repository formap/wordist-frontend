angular.module('wordist').controller('WordsController', WordsController);

function WordsController ($scope, $state, usersService) {

  usersService.getWords().then(function (data) {
    $scope.words = data.data;
  });
}