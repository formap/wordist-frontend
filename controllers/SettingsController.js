angular.module('wordist').controller('SettingsController', SettingsController);

function SettingsController ($scope, $state, usersService) {
  $scope.modifyButton = 'Modify';
  $scope.myOldPassword = '';
  $scope.myNewPassword = '';
  $scope.myNewPassword2 = '';

  $scope.modify = function () {
    //check if password is correct
    if ($scope.myNewPassword == $scope.myNewPassword2) {
      //enviar nueva contraseña a la api
      var changePassData = {
        oldPassword: $scope.myNewPassword,
        password: $scope.myNewPassword2
      }

      authService.changePassword(signUpData).then()
    }
  }
}
