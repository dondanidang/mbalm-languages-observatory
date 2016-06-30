'use strict';
angular
  .module('OLCM')
  .config(['$urlRouterProvider', '$locationProvider',
    function($urlRouterProvider, $locationProvider){
      //Route all the modules
      $urlRouterProvider.when('/home', '/home');
      $urlRouterProvider.when('/', '/home');
      $urlRouterProvider.otherwise('/');
      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });
    }]);
