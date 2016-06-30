'use strict';
angular
  .module('nonAdmin')
  .config(['$stateProvider',
    function($stateProvider){
      $stateProvider
        .state('nonAdmin', {
          abstract: true,
          url: '',
          templateUrl: 'app/nonAdmin/layout.html'
        })
        .state('nonAdmin.home', {
          url: '/home',
          templateUrl: 'app/nonAdmin/home/main.html'
        })
        .state('nonAdmin.aboutus', {
          url: '/aboutus',
          templateUrl: 'app/nonAdmin/aboutUs/main.html'
        })
        .state('nonAdmin.actionrange', {
          url: '/actions',
          templateUrl: 'app/nonAdmin/actionRange/main.html'
        })
        .state('nonAdmin.ressources', {
          url: '/ressources',
          templateUrl: 'app/nonAdmin/ressources/main.html'
        })
        .state('nonAdmin.contactus', {
          url: '/contactus',
          templateUrl: 'app/nonAdmin/contactUs/main.html'
        });
  }]);
  // .config(['$urlRouterProvider',
  //   function ($urlRouterProvider) {
  //     $urlRouterProvider.when('/','/home');
  // }]);
