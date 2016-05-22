angular.module('wordist').controller('IndexController', IndexController);

function IndexController($scope, $state) {

  $scope.token = localStorage.getItem('wordistToken');

  if ($scope.token) $state.go('home');
}
