'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AddCtrl
 * @description # AddCtrl Controller of the yoAngularApp
 */
angular.module('yoAngularApp').controller('AddCtrl',
		function($scope, $location, Person) {

			$scope.add = function(user) {
				$scope.$broadcast('show-errors-check-validity');

				if ($scope.form.$valid) {

					var person = new Person({
						firstName : $scope.user.firstName,
						lastName : $scope.user.lastName
					});

					person.$save();
					$location.path('#');
				}

			};
		});
