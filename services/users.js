angular.module('wordist').factory('usersService', usersService);

function usersService ($http, $q) {
  var SERVER_URL = 'https://wordist-backend.herokuapp.com/users/';

  return {

    getWords: function() {
      var userId = localStorage.getItem('wordistId');
      var token = {
        'headers': {
          'authorization': 'Bearer ' + localStorage.getItem('wordistToken')
        }
      }
      var q = $q.defer();
      $http.get(SERVER_URL + userId + '/words', token).then(
        function (words) {
          q.resolve(words);
        }, function (err) {
          q.reject(err);
        }
      );
      return q.promise;
    },

    changePassword: function(data) {
      var userId = localStorage.getItem('wordistId');
      var token = {
        'headers': {
          'authorization': 'Bearer ' + localStorage.getItem('wordistToken')
        }
      }
      var q = $q.defer();
      $http.put(SERVER_URL + userId, data, token).then(
        function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }
      );
      return q.promise;
    }

  }
}
