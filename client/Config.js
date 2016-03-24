console.log('In the Client Config')
var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/main.ejs',
		controller: 'userController'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dashboard.ejs',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		templateUrl: '/partials/topic.ejs',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: '/partials/user.ejs',
		controller: 'userController'
	})
	.otherwise({
		redirectTo: '/'
	})
})
