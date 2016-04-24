'use strict';

/* Controllers */

angular.module('TravelMate.controllers', ['ngAutocomplete']).
  controller('AppCtrl', function ($scope, $http, $location, $route) {
      // alert("hiii");
      if (sessionStorage.username === undefined)
      {
          $scope.user = "";
          $scope.isAuthenticated = false;
      }
      else
      {
          $scope.user = sessionStorage.username;
          $scope.isAuthenticated = true;         
      }
     
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
      $scope.LogOut = function () {
          alert("logged out");
          sessionStorage.clear();
          $route.reload();
      }
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
  controller('Destinations', function ($scope, $routeParams, $http, $location) {
      // write Ctrl here
      $scope.city = $routeParams.param;
      $scope.myNumber = 5;
      $http({
          method: 'GET',
          url: '/api/destinations'
      }).
      success(function (data, status, headers, config) {
          $scope.destinations = data[$routeParams.param];
          if ($scope.destinations === undefined) {
              $scope.errormsg = "No data found"
              $scope.destinations = null;
          }
          //alert("Destinations" + data[$routeParams.param]);
      }).
      error(function (data, status, headers, config) {
          $scope.name = 'Error!';
      });

      $scope.getNumber = function (num) {
          return new Array(num);
      }

      $scope.searchHotels = function (city) {
          //alert(city)
          $location.path("/hotels/" + city);
      }

  }).
   controller('SignUp', function ($scope,$http) {
       // write Ctrl here

   }).
    controller('SignIn', function ($scope, $http, $location) {
        // write Ctrl here

        $http({
            method: 'GET',
            url: '/api/users'
        }).
       success(function (data, status, headers, config) {
       $scope.users = data;      
   }).
   error(function (data, status, headers, config) {
       $scope.name = 'Error!';
   });


        $scope.submitLogin = function () {
            //alert($scope.login.email);
            for(var i=0;i<$scope.users.length;i++)
            {
                if($scope.users[i].email===$scope.login.email)
                {
                    sessionStorage.username = $scope.users[i].name;
                    sessionStorage.email = $scope.users[i].email;
                    $location.path("/search");
                    break;
                }
            }
            if(sessionStorage.username===undefined)
            {
                $scope.errormsg = "Username or password invalid";
            }
        }

    }).
  controller('Hotels', function ($scope, $routeParams, $http, $location) {
      $scope.city = $routeParams.param;

      $http({
          method: 'GET',
          url: '/api/hotels'
      }).
      success(function (data, status, headers, config) {
          $scope.hotels = data[$routeParams.param];
          if ($scope.hotels === undefined) {
              $scope.errormsg = "No data found"
              $scope.hotels = null;
          }
          //alert("Destinations" + data[$routeParams.param]);
      }).
      error(function (data, status, headers, config) {
          $scope.name = 'Error!';
      });

      $scope.getNumber = function (num) {
          return new Array(num);
      }

      $scope.BookHotel = function (hotel) {
          $location.path("/bookhotel/" + hotel);
      }
  }).
controller('BookHotel', function ($scope, $routeParams,$http) {
    $scope.hotel = $routeParams.param;
});
