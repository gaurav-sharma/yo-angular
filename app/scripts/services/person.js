'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.Person
 * @description # Person Factory in the yoAngularApp.
 */
angular.module('yoAngularApp').factory('Person', function($resource) {

	return $resource('http://localhost:8080/people/:id');
});
