'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('AddCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
