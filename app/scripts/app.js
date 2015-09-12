'use strict';

/**
 * @ngdoc overview
 * @name matchmoveApp
 * @description
 * # matchmoveApp
 *
 * Main module of the application.
 */
var app = angular.module('matchmoveApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
