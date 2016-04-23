'use strict';

/* Controllers */

angular.module('TravelMate.controllers', ['ngAutocomplete']).
  controller('AppCtrl', function ($scope, $http) {
      // alert("hiii");

    
    $http({
      method: 'GET',
      url: '/api/destinations'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('Search', function ($scope, $location) {
      // write Ctrl here
      $scope.result2 = '';
      $scope.options2 = {
          country: 'us',
          types: '(cities)'
      }; $scope.details2 = '';

      $scope.city = ["Chicago", "New York"];
      $scope.searchbtn = function () {
          //alert("dddd" + $scope.result2);
          $location.path("/destinations/" + $scope.result2.split(",")[0]);
         // $location.path("/hotels");
      }
       // alert("Search");
  }).
  controller('Destinations', function ($scope, $routeParams, $http) {
      // write Ctrl here

      $http({
          method: 'GET',
          url: '/api/destinations'
      }).
      success(function (data, status, headers, config) {
          
          alert("Destinations" + data[$routeParams.param]);
      }).
      error(function (data, status, headers, config) {
          $scope.name = 'Error!';
      });
      
  }).
  controller('Hotels', function ($scope) {
    // write Ctrl here

  });
