'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.Person
 * @description
 * # Person
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('Person', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
