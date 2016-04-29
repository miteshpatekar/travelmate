'use strict';

/* Controllers */

angular.module('TravelMate.controllers', ['ngAutocomplete', 'ngMap']).
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
  controller('Destinations', function ($scope, NgMap, $routeParams, $http, $location) {
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

      // $scope.searchOnMaps = function() {
      //    NgMap.getMap().then(function(map) {
      //     console.log(map.getCenter());
      //     console.log('markers', map.markers);
      //     console.log('shapes', map.shapes);
      //   });
      // }

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
}).

controller('Maps', function ($scope, NgMap, $routeParams, $http) {

    $scope.pointsCity = [
        { "city": "Chicago", "name": "Bean Millenium Park", "latitude": 41.883365 , "longitude": -87.623134 },
        { "city": "Chicago","name": "John Hancock Tower", "latitude": 41.8989217 , "longitude": -87.6236638 },
        { "city": "Chicago","name": "Navy Pier", "latitude": 41.8916997 , "longitude": -87.6044962 },
        { "city": "Chicago","name": "Willis Tower", "latitude": 41.878644 , "longitude": -87.6358859 },
        { "city": "Chicago","name": "BuckingHam Fountain", "latitude": 41.8755887 , "longitude": -87.6189408 },
        { "city": "Chicago","name": "Adler Planetarium", "latitude": 41.8661444 , "longitude": -87.6067179 },

        { "city": "New York","name": "Statue of Liberty", "latitude": 40.689247 , "longitude": -74.044502 },
        { "city": "New York","name": "Central Park", "latitude": 40.785091  , "longitude": -73.968285 },
        { "city": "New York","name": "Times Square", "latitude": 40.758896 , "longitude": -73.985130 },
        { "city": "New York","name": "Brooklyn Bridge", "latitude": 40.650002 , "longitude": -73.949997 },
        { "city": "New York","name": "The Empire State Building", "latitude": 40.748817 , "longitude": -73.985428 },
        { "city": "New York","name": "Manhattan's Chinatown", "latitude": 40.7158 , "longitude": -73.997 }

    ];



  $scope.pointsHotels = [
        { "city": "Chicago", "name": "Congress", "latitude": 41.875395 , "longitude":  -87.624332 },
        { "city": "Chicago","name": "Double Tree", "latitude": 41.6618 , "longitude": -87.7423 },
        { "city": "Chicago","name": "Hotel Chicago", "latitude": 41.8916997 , "longitude": -87.6044962 },
        { "city": "Chicago","name": "Millennium Knickerbocker Hotel", "latitude": 41.8998 , "longitude": -87.6227 },
        { "city": "Chicago","name": "Marriot", "latitude": 41.8755887 , "longitude": -87.6189408 },
        { "city": "Chicago","name": "Sheraton Grand Chicago", "latitude": 41.8891 , "longitude": -87.6197 },

        { "city": "New York","name": "Hilton Garden", "latitude": 40.689247 , "longitude": -74.044502 },
        { "city": "New York","name": "Jolly Madison Towers", "latitude": 40.785091  , "longitude": -73.968285 },
        { "city": "New York","name": "Marriott Marquis", "latitude": 40.7586 , "longitude": -73.9862 },
        { "city": "New York","name": "New Yorker A Wyndham Hotel", "latitude": 40.7527 , "longitude": -73.9936 },
        { "city": "New York","name": "Hotel Row", "latitude": 40.7575 , "longitude": -73.9866 },

    ];



    $scope.cityLatLong = [
        { "name": "Chicago", "latitude": 41.881832 , "longitude": -87.623177 },
        { "name": "New York", "latitude":   40.730610, "longitude": -73.935242 },
    ]
    

    $scope.customIcon = {
        "scaledSize": [32, 32],
        "url": "http://sportsboard.punjab.gov.pk/imagesmm/social/maps.png"
    };
// $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE";)

// $scope.searchOnMaps = function() {
//    NgMap.getMap().then(function(map) {
//     console.log(map.getCenter());
//     console.log('markers', map.markers);
//     console.log('shapes', map.shapes);
//   });
// }
 
});
