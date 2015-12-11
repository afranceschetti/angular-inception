'use strict';

var appDirectives = angular.module('sdp_userportal_slides.directives', []);

appDirectives.directive('appVersion', [ 'version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
} ]);

appDirectives.directive('slide11Welcome', function() { return {templateUrl : 'slides/slide1_1_welcome.html'};});
appDirectives.directive('slide12Agenda', function() { return {templateUrl : 'slides/slide1_2_agenda.html'};});
appDirectives.directive('slide13Intro', function() { return {templateUrl : 'slides/slide1_3_intro.html'};});
appDirectives.directive('slide200Client', function() { return {templateUrl : 'slides/slide2_0_0_client.html'};});
appDirectives.directive('slide210Angular', function() { return {templateUrl : 'slides/slide2_1_0_angular.html'};});
appDirectives.directive('slide211AngularIntro', function() { return {templateUrl : 'slides/slide2_1_1_angular_intro.html'};});
appDirectives.directive('slide2121AngularComponentsTemplates', function() { return {templateUrl : 'slides/slide2_1_2_1_angular_components_templates.html'};});
appDirectives.directive('slide2122AngularComponentsDirectives', function() { return {templateUrl : 'slides/slide2_1_2_2_angular_components_directives.html'};});
appDirectives.directive('slide2123AngularComponentsCustomdirectives', function() { return {templateUrl : 'slides/slide2_1_2_3_angular_components_customdirectives.html'};});
appDirectives.directive('slide2124AngularComponentsDatabinding', function() { return {templateUrl : 'slides/slide2_1_2_4_angular_components_databinding.html'};});
appDirectives.directive('slide2125AngularComponentsFilters', function() { return {templateUrl : 'slides/slide2_1_2_5_angular_components_filters.html'};});
appDirectives.directive('slide2126AngularComponentsRouting', function() { return {templateUrl : 'slides/slide2_1_2_6_angular_components_routing.html'};});
appDirectives.directive('slide213AngularPlugins', function() { return {templateUrl : 'slides/slide2_1_3_angular_plugins.html'};});
appDirectives.directive('slide214AngularExample', function() { return {templateUrl : 'slides/slide2_1_4_angular_example.html'};});
appDirectives.directive('slide215AngularReferences', function() { return {templateUrl : 'slides/slide2_1_5_angular_references.html'};});
appDirectives.directive('slide22Nvd3', function() { return {templateUrl : 'slides/slide2_2_nvd3.html'};});
appDirectives.directive('slide30Server', function() { return {templateUrl : 'slides/slide3_0_server.html'};});
appDirectives.directive('slide31Jboss', function() { return {templateUrl : 'slides/slide3_1_jboss.html'};});
appDirectives.directive('slide32Servlet', function() { return {templateUrl : 'slides/slide3_2_servlet.html'};});
appDirectives.directive('slide40Build', function() { return {templateUrl : 'slides/slide4_0_build.html'};});
appDirectives.directive('slide41Github', function() { return {templateUrl : 'slides/slide4_1_github.html'};});
appDirectives.directive('slide42Maven', function() { return {templateUrl : 'slides/slide4_2_maven.html'};});
appDirectives.directive('slide43Grunt', function() { return {templateUrl : 'slides/slide4_3_grunt.html'};});
appDirectives.directive('slide44Bower', function() { return {templateUrl : 'slides/slide4_4_bower.html'};});
appDirectives.directive('slide5Goodbye', function() { return {templateUrl : 'slides/slide5_goodbye.html'};});

appDirectives.directive('simpleFooter', function() { return {templateUrl : 'simple_footer.html'};});
