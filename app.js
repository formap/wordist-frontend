angular.module('wordist', ['ui.router', 'ngMessages', 'ngSanitize']).config(Config);

function Config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      views: {
        'complete-page': {
          templateUrl: 'index.html'
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
    })
    .state('home', {
      url: '/home',
      views: {
        'complete-page': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        },
        'home-center@home': {
          templateUrl: 'templates/words.html',
          controller: 'WordsController'
        },
        'home-center@home': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    })
    .state('home.words', {
      views: {
        'home-center@home': {
          templateUrl: 'templates/words.html',
          controller: 'WordsController'
        }
      }
    })
    .state('home.settings', {
      views: {
        'home-center@home': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
