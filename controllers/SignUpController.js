angular.module('wordist').controller('SignUpController', SignUpController);

function SignUpController ($scope, $state, authService) {
  $scope.signUpButton = 'Sign-up';

  function goToSignIn() {
    $state.go('/.sign-in');
  }

  $scope.signIn = function () {
    goToSignIn();
  };

  $scope.signUp = function() {
    $scope.signUpButton = 'Loading';
    var signUpData = {
      email: $scope.email,
      password: $scope.password
    }

    authService.signUp(signUpData).then(
      function (newUser) {
        $scope.signUpButton = 'Sign-up';
        goToSignIn();
      }
    )
  };
}
