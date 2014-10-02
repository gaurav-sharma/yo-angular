'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.Person
 * @description # Person Factory in the yoAngularApp.
 */
angular.module('yoAngularApp').factory('Person', function($resource) {

	return $resource('http://serene-refuge-6530.herokuapp.com/:id');
});
