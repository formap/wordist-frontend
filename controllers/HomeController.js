angular.module('wordist').controller('HomeController', HomeController);

function HomeController ($scope, $state) {
  $scope.selected = '';
  
  $scope.goHome = function () {
    $scope.selected = 'home';
    $state.go('home.words');
  }

  $scope.goToSettings = function () {
    $scope.selected = 'settings';
    $state.go('home.settings');
  }

  $scope.signOut = function () {
    $scope.selected = '';
    localStorage.removeItem('wordistToken');
    $state.go('/');
  }

 $scope.isActive = function(item) {
    return $scope.selected === item;
 };
}
