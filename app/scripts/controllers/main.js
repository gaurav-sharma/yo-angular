'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description # MainCtrl Controller of the yoAngularApp
 */
angular.module('yoAngularApp').controller('MainCtrl',
		function($scope, $resource, $window, Person) {
			$scope.people = Person.get();

			$scope.remove = function(person) {
				var confirmation = $window.confirm('Are you sure?');

				if (confirmation) {

					var p = $resource(person._links.self.href);
					var deleted = p.get({}, function() {
						deleted.$remove({}, function() {
							$scope.people = Person.get();
						});

					});
				}
			};
		});
