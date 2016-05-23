angular.module('wordist').controller('SettingsController', SettingsController);

function SettingsController ($scope, $state, usersService) {
  $scope.modifyButton = 'Modify';

  $scope.modify = function () {
    //check if password is correct
    if ($scope.myNewPassword == $scope.myNewPassword2) {
      //enviar nueva contraseña a la api
      var passwordData = {
        oldPassword: $scope.myOldPassword,
        password: $scope.myNewPassword2
      }
      usersService.changePassword(passwordData).then(function(result) {
        $scope.myOldPassword = '';
        $scope.myNewPassword = '';
        $scope.myNewPassword2 = '';
        if (result.status != 200) {
          $scope.errorMessage = 'Incorrect password';
        } else {
          $scope.errorMessage = 'Successfully changed password';
        }
      });
    }
  }
}
