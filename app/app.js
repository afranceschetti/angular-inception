'use strict';

// Declare app level module which depends on views, and components
angular.module('sdp_userportal_slides', [
  'sdp_userportal_slides.controllers',
  'sdp_userportal_slides.directives',
  'sdp_userportal_slides.services',
  'ui.bootstrap',
  //'timer', 
  'pascalprecht.translate'])
 
 .config(['$translateProvider', function ($translateProvider) {
	$translateProvider
	.translations('en', translations_en)
	.translations('it', translations_it)
	.preferredLanguage('en');
}]);
