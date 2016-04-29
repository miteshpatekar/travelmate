'use strict';

// Declare app level module which depends on filters, and services

angular.module('TravelMate', [
  'TravelMate.controllers',
  'TravelMate.filters',
  'TravelMate.services',
  'TravelMate.directives',
  'ngMap'
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
    when('/hotels/:param', {
      templateUrl: 'partials/hotels',
      controller: 'Hotels'
    }).
    when('/signup', {
      templateUrl: 'partials/SignUp',
      controller: 'SignUp'
    }).
    when('/signin', {
        templateUrl: 'partials/SignIn',
        controller: 'SignIn'
    }).
    when('/bookhotel/:param', {
          templateUrl: 'partials/bookHotel',
          controller: 'BookHotel'
    }).
    when('/destinations/maps', {
          templateUrl: 'partials/maps',
          controller: 'Maps'
    }).
    otherwise({
      redirectTo: '/search'
    });

  //$locationProvider.html5Mode(true);
});
