angular.module('wordist').controller('HomeController', HomeController);

function HomeController ($scope, $state) {
  var token = localStorage.getItem('wordistToken');
  if (!token) $state.go('/');

  $scope.selected = 'home';

  $scope.goHome = function () {
    $scope.selected = 'home';
    $state.go('home.words');
  }

  $scope.goToSettings = function () {
    $scope.selected = 'settings';
    $state.go('home.settings');
  }

  $scope.signOut = function () {
    $scope.selected = 'signOut';
    localStorage.removeItem('wordistToken');
    $state.go('/');
  }

 $scope.isActive = function(item) {
    return $scope.selected === item;
 };
}
