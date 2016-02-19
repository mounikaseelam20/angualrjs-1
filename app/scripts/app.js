'use strict';

/**
 * @ngdoc overview
 * @name sample2App
 * @description
 * # sample2App
 *
 * Main module of the application.
 */
angular
  .module('sample2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
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
        redirectTo: '/home'
      });
  });

// $(document).ready(function(){
//     $("#menu-toggle").click(function(){
//         $("#sidebar-wrapper").fadeToggle("slow");
       
        
//     });
// });

var app = angular.module('sample2App');

app.controller('MainController', ['$scope',
  function MainController($scope) {
     $scope.animate = true;
        $scope.autoScroll = true;
        $scope.play = function() {
            $scope.animate = !$scope.animate;
            $scope.autoScroll = !$scope.autoScroll;

        }

  }
]);