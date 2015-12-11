'use strict';

var appControllers = angular.module('sdp_userportal_slides.controllers', []);

appControllers.controller('GlobalCtrl', [ '$scope', function($scope) {
} ]);

appControllers.controller('ExampleCtrl', [ '$scope', '$translate', function($scope, $translate) {
	 $scope.ciao = "ciao";
	 $scope.slides = [{myProp:"one"},{myProp: "two"}];
	 $scope.myInterval = 1500;
	 
	 $scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
	};

} ]);
