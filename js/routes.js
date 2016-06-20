var camcan = angular.module('apex', ['ngRoute', 'ngAnimate'])

camcan.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html'
		})
		.when('/cv', {
			templateUrl : 'pages/cv.html'
		})
		.when('/projects', {
			templateUrl : 'pages/portfolio.html',
			controller  : 'projectsController'
		})

		.when('/projects/view', {
			templateUrl : 'pages/item.html',
			controller : 'projectsController'
		})
		
})