'use strict';

/* Directives */

angular.module('TravelMate.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
