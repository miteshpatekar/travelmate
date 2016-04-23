'use strict';

// Declare app level module which depends on filters, and services

angular.module('TravelMate', [
  'TravelMate.controllers',
  'TravelMate.filters',
  'TravelMate.services',
  'TravelMate.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/search', {
      templateUrl: 'partials/search',
      controller: 'Search'
    }).
    when('/destinations/:param', {
      templateUrl: 'partials/destinations',
      controller: 'Destinations'
    }).
    when('/hotels', {
      templateUrl: 'partials/hotels',
      controller: 'Hotels'
    }).
    otherwise({
      redirectTo: '/search'
    });

  //$locationProvider.html5Mode(true);
});
