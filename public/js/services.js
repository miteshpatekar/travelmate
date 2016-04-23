'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('TravelMate.services', [])
.factory('getDataService', ['$http', function ($http) {

    var apiBaseUrl = "/api/";

    var getDestinations = function (callback) {
        $http.get(apiBaseUrl + 'destinations')
         .success(function (data) {
             callback(null, data);
         })
         .error(function (e) {
             callback(e);
         });
    };

    var getWorkshops = function (callback) {
        $http.get(apiBaseUrl + 'workshops/all/')
        .success(function (data) {
            callback(null, data);
        })
       .error(function (e) {
           callback(e);
       });
    };

    return {
        getInstance: getInstance,
        getWorkshops: getWorkshops
    };
}]);
