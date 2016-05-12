angular.module('wordist').controller('SignInController', SignInController);

function SignInController ($scope, $state) {
  $scope.signUp = function () {
    $state.go('/.sign-up');
  };
}
