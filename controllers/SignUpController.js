angular.module('wordist').controller('SignUpController', SignUpController);

function SignUpController ($scope, $state) {
  $scope.signIn = function() {
    $state.go('/.sign-in');
  }
}
