angular.module('wordist').controller('HomeController', HomeController);

function HomeController ($scope, $state) {
  $scope.goHome = function () {
    $state.go('home.words');
  }

  $scope.goToSettings = function () {
    $state.go('home.settings');
  }

  $scope.signOut = function () {
    localStorage.removeItem('wordistToken');
    $state.go('/');
  }
}
