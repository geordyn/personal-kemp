angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('hello', {
      url: '/hello',
      templateUrl: 'home.html',
      controller: 'mainCtrl',
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'projects.html',
      controller: 'mainCtrl',
    })

    $urlRouterProvider.otherwise('/hello');



///end config
});
