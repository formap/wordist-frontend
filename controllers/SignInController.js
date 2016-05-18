angular.module('wordist').controller('SignInController', SignInController);

function SignInController ($scope, $state, $window, authService) {
  $scope.signInButton = 'Sign-in';

  $scope.signUp = function () {
    $state.go('/.sign-up');
  };

  $scope.signIn = function () {
    $scope.signInButton = 'Loading';
    var signInData = {
      email: $scope.email,
      password: $scope.password
    }

    authService.signIn(signInData).then(
      function (signedUser) {
        $scope.signInButton = 'Sign-in';
        localStorage.setItem('wordistToken', signedUser.data.token);
        localStorage.setItem('wordistUserId', signedUser.data.user._id);
        $state.go('home');
      }
    )
    $scope.signInButton = 'Sign-in';
  }
}
