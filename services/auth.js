angular.module('wordist').factory('authService', authService);

function authService ($http, $q) {
  var SERVER_URL = 'https://wordist-backend.herokuapp.com/auth/';

  return {

    signUp: function(data) {
      var q = $q.defer();
      $http.post(SERVER_URL, data).then(
        function (newUser) {
          q.resolve(newUser);
        }, function (err) {
          q.reject(err);
        }
      );
      return q.promise;
    },

    signIn: function(data) {
      var q = $q.defer();
      $http.post(SERVER_URL + '/login', data).then(
        function (user) {
          q.resolve(user);
        }, function (err) {
          q.reject(err);
        }
      );
      return q.promise;
    }
  }
}
