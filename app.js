angular.module('wordist', ['ui.router', 'ngMessages', 'ngSanitize']).config(Config);

function Config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      views: {
        'complete-page': {
          templateUrl: 'index.html',
          controller: 'IndexController'
        },
        'sign-div@/': {
          templateUrl: 'templates/signIn.html',
          controller: 'SignInController'
        }
      }
    })
    .state('/.sign-in', {
      views: {
        'sign-div@/': {
          templateUrl: 'templates/signIn.html',
          controller: 'SignInController'
        }
      }
    })
    .state('/.sign-up', {
      views: {
        'sign-div@/': {
          templateUrl: 'templates/signUp.html',
          controller: 'SignUpController'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
